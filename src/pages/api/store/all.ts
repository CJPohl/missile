import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/db/dbConnect(mongoose)';
import Spell from '../../../lib/models/Spell';

// Send all stock data as json
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const stock = await Spell.find({});
  return res.status(200).json(stock);
};
