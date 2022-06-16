import axios from 'axios';
import mongoose from 'mongoose';
import School, { SchoolDocument } from '../lib/models/School';
import Spell, { SpellDocument } from '../lib/models/Spell';

/// TYPES ///
interface spell {
  index: string;
  name: string;
  url: string;
}

interface school {
  index: string;
  name: string;
  url: string;
}

/// Populate MONGODB store list with spells from the DND API ///
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('Need MONGO URI');

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (err) {
    throw new Error('Something went wrong with DB connection');
  }

  await upload();
};

const upload = async () => {
  // Retrieve spell list
  const { data: spells } = await axios.get(
    'https://www.dnd5eapi.co/api/spells'
  );
  const spellList = spells.results;

  // Retrieve school list
  const { data: schools } = await axios.get(
    'https://www.dnd5eapi.co/api/magic-schools'
  );
  const schoolList = schools.results;

  // for each spell, retrieve single spell data, make a new model and save
  spellList.forEach(async (spell: spell) => {
    const { index: spellIndex } = spell;
    const { data } = await axios.get(
      `https://www.dnd5eapi.co/api/spells/${spellIndex}`
    );

    // Create new spell
    const newSpell = new Spell<SpellDocument>({
      name: data.name,
      desc: data.desc,
      attack_type: data.attack_type,
      range: data.range,
      level: data.level,
      price: calculatePrice(data.level),
      school: data.school.index,
    });

    try {
      await newSpell.save();
      console.log(`Added: ${data.name} to DB!`);
    } catch (err) {
      console.log(err);
    }
  });
  // same for each school
  schoolList.forEach(async (school: school) => {
    const { index: schoolIndex } = school;
    const { data } = await axios.get(
      `https://www.dnd5eapi.co/api/magic-schools/${schoolIndex}`
    );

    // Create new school
    const newSchool = new School<SchoolDocument>({
      name: data.name,
      index: data.index,
      desc: data.desc,
    });

    try {
      await newSchool.save();
      console.log(`Added: ${data.name} to DB!`);
    } catch (err) {
      console.log(err);
    }
  });
};

// Depending on level, calculate price
const calculatePrice = (level: number) => {
  return level * 20;
};

connect();
