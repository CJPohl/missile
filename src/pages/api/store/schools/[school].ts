import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/db/dbConnect(mongoose)';
import School from '../../../../lib/models/School';

// Get single school data
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { school: schoolQuery } = req.query;

  const school = await School.findOne({ index: schoolQuery });

  if (!school)
    return res.status(404).json({ errors: [{ msg: 'Schoool not found' }] });

  return res.status(200).json({ school });
};
