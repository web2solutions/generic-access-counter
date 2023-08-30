// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  counter: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cache = await kv.get('counter');
  let counter: number = +(cache || 0);
  counter += 1;
  await kv.set('counter', counter);
  res.status(200).json({ counter })
}
