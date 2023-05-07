import { getClient } from "../../../../../../apolloClient/apollo-client";
import React from "react";
import fetchWeather from "../../../../../../graphql/queries/fetchWeather";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import SideBar from "@/components/SideBar";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";
import getBaseUrl from "../../../../../../lib/getBaseUrl";
import cleanData from "../../../../../../lib/cleanData";

export const revalidate = 60;
type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function Page({ params: { city, lat, long } }: Props) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeather,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });
  const results: Root = data.myQuery;
  const dataToSend = cleanData(results, city);
  const res = await fetch(`${getBaseUrl()}/api/getSuggestion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ weatherData: dataToSend }),
  });
  const suggestionData = await res.json();
  const { content } = await suggestionData;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBar city={city} lat={lat} long={long} results={results} />
      <div className="p-5 flex-1 lg:p-10">
        <div className="">
          <h2 className="text-xl font-bold">Todays Overview</h2>
          <p className="text-sm text-gray-400">
            Last Updated at:{" "}
            {new Date(results.current_weather.time).toLocaleString()}{" "}
            {results.timezone}
          </p>
        </div>
        <div>
          <CalloutCard message={content} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 ">
          <StatCard
            title="Maximum Temperature"
            metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°C`}
            color="yellow"
          />

          <StatCard
            title="Minimum Temperature"
            metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°C`}
            color="blue"
          />

          <div>
            <StatCard
              title="UV Index"
              metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
              color="rose"
            />
            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <CalloutCard
                message={"The UV is high today, be sure to wear SPF"}
                warning
              />
            )}
          </div>

          <div className="flex space-x-2">
            <StatCard
              title="Wind Speed"
              metric={`${results.current_weather.windspeed.toFixed(1)} km/h`}
              color="cyan"
            />
            <StatCard
              title="Wind Direction"
              metric={`${results.current_weather.winddirection.toFixed(1)} °`}
              color="violet"
            />
          </div>
        </div>
        <hr className="py-5" />

        <div className="space-y-5">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default Page;
