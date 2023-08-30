// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from 'next';

import { createCanvas } from '@napi-rs/canvas';


type Data = {
  counter: number,
  dataURL: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Buffer>
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

  // Add post object with the content to render
  const post = {
    title: "Draw and save images with Canvas and Node"
  }

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#764abc";
  context.fillRect(0, 0, width, height);

  // Set the style of the test and render it to the canvas
  context.font = "bold 12pt 'PT Arial'";
  context.textAlign = "center";
  context.fillStyle = "#fff";
  // 600 is the x value (the center of the image)
  // 170 is the y (the top of the line of text)
  context.fillText(`You are the visitor #${counter} since ${since}`, 200, 20);
  
  const dataURL = await canvas.toDataURL("image/png");
  const buffer = await canvas.toBuffer('image/jpeg')
  res.status(200).setHeader('Content-Type', 'image/jpeg').send(buffer)
}
