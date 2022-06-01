import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/db/dbConnect(mongoose)';
import Spell from '../../../lib/models/Spell';

// Query DB and sort results by text score
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { name } = req.body;

  const results = await Spell.find(
    { $text: { $search: name } },
    { score: { $meta: 'textScore' } }
  )
    .sort({ score: { $meta: 'textScore' } })
    .limit(10);

  if (!results)
    return res.status(404).json({ errors: [{ msg: 'No results' }] });

  res.status(200).json({ results });
};
