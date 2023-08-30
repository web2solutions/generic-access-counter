import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from 'next';

import { createCanvas } from '@napi-rs/canvas';


type Data = {
  counter: number,
  dataURL: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cache = await kv.get('counter');
  
  
  let counter: number = +(cache || 0);
  counter += 1;
  await kv.set('counter', counter);


  let cacheDate = await kv.get('sinceDate');
  let now = (new Date()).toLocaleString();

  if(!!!cacheDate) {
    await kv.set('sinceDate', now);
  }
  let since = await kv.get('sinceDate');

  const width = 400;
  const height = 40;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#764abc";
  context.fillRect(0, 0, width, height);

  context.font = "bold 12pt 'PT Arial'";
  context.textAlign = "center";
  context.fillStyle = "#fff";

  context.fillText(`You are the visitor #${counter} since ${since}`, 200, 20);
  
  const dataURL = await canvas.toDataURL("image/png");
  res.status(200).json({ counter, dataURL })
}
