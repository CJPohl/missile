import axios from 'axios';
import mongoose from 'mongoose';
import Spell, { SpellDocument } from '../lib/models/Spell';

interface spell {
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
  const { data } = await axios.get('https://www.dnd5eapi.co/api/spells');
  const spellList = data.results;
  // const response = await axios.get(
  //   `https:///www.dnd5eapi.co/api/spells/acid-arrow`
  // );
  // console.log(response.data);

  // for each spell, retrieve single spell data, make a new model and save
  spellList.forEach(async (spell: spell) => {
    const { index } = spell;
    const { data } = await axios.get(
      `https://www.dnd5eapi.co/api/spells/${index}`
    );

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
};

// Depending on level, calculate price
const calculatePrice = (level: number) => {
  return level * 20;
};

connect();
