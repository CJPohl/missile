import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/db/dbConnect(mongoose)';
import Spell from '../../../../lib/models/Spell';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { spellsSchool } = req.query;

  const spells = await Spell.find({ school: spellsSchool });

  if (!spells)
    return res.status(404).json({ errors: [{ msg: 'Spells not found' }] });

  return res.status(200).json(spells);
};
