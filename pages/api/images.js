import { OpenAI } from 'openai';

export default async function handler(req, res) {
  const openai = new OpenAI({
    apiKey: req.query.t,
  });

  const response = await openai.images.generate({
    prompt: req.query.p,
    n: parseInt(req.query.n),
    size: "1024x1024",
  });
  console.log(response.data);
  res.status(200).json({ result: response.data });
}
