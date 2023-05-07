import { NextResponse } from "next/server";
import Openai from "../../../../lib/openai";

export async function POST(request: Request) {
  const { weatherData } = await request.json();
  const response = await Openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're a weather news presenter presenting LIVE on television.be energetic and full of charisma.Introduce yourself as Decole mills and say you are LIVE from the NEWSGETTY Headequarters. state the city you are from. then give a summary of todays weather only.make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high etc.use the uv_index data provided to provide UV advice. Provide recommendation for where to go for outing regarding the weather.Assume the weather data came from your team at the news office and not the user.`,
      },
      {
        role: "user",
        content: `Hi There, can i get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  const { data } = response;
  return NextResponse.json(data.choices[0].message);
}
