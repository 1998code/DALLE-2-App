import { Dalle } from "dalle-node"

export default async function handler(req, res) {
  const dalle = new Dalle(req.query.k);
  const generations = await dalle.generate(req.query.q);
  res.status(200).json({ result: generations })
}
