// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from 'next';

import { createCanvas } from '@napi-rs/canvas';


const width = 1200;
const height = 627;

// Add post object with the content to render
const post = {
  title: "Draw and save images with Canvas and Node"
}

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

context.fillStyle = "#764abc";
context.fillRect(0, 0, width, height);

// Set the style of the test and render it to the canvas
context.font = "bold 70pt 'PT Sans'";
context.textAlign = "center";
context.fillStyle = "#fff";
// 600 is the x value (the center of the image)
// 170 is the y (the top of the line of text)
context.fillText(post.title, 600, 170);

const buffer = canvas.toBuffer("image/png");

type Data = {
  counter: number,
  buffer: Buffer,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cache = await kv.get('counter');
  let counter: number = +(cache || 0);
  counter += 1;
  await kv.set('counter', counter);
  res.status(200).json({ counter, buffer })
}
