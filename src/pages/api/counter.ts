import { Redis } from "@upstash/redis";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  counter: number;
  since: string;
};

function getRedis() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error("Missing Redis REST credentials");
  }
  return new Redis({ url, token });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  try {
    const redis = getRedis();
    const counter = await redis.incr("counter");

    let since = await redis.get<string>("sinceDate");
    if (!since) {
      since = new Date().toLocaleString();
      await redis.set("sinceDate", since);
    }

    res
      .status(200)
      .setHeader("Cache-Control", "no-store")
      .json({ counter, since });
  } catch (error) {
    console.error(error);
    res.status(500).setHeader("Content-Type", "text/plain").send("Internal Server Error");
  }
}
