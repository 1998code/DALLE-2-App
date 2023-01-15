export default async function handler(req, res) {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: req.query.t,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.query.p,
    n: parseInt(req.query.n),
    size: "1024x1024",
  });
  console.log(response.data.data);
  res.status(200).json({ result: response.data.data })
}
