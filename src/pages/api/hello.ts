import redis from "../../lib/redis";

export default async function handler(req, res) {
  redis.sadd("test", "value");
  return res.status(200).json({});
}
