import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/db/dbConnect(mongoose)';
import Spell from '../../../lib/models/Spell';

// Send individual spell from query
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { spellId } = req.query;
  const spell = await Spell.findById(spellId);

  if (!spell)
    return res.status(404).json({ errors: [{ msg: 'Spell not found' }] });

  return res.json(spell);
};
