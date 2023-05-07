import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});
const Openai = new OpenAIApi(configuration);

export default Openai;
