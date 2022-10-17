import axios from "axios";

export default async function handler(req, res) {

  const url = req.body.url;

  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });

  const base64 = Buffer.from(response.data, "binary").toString("base64");

  res.status(200).json({ result: base64 });

}
