import React from "react";

import CityPicker from "./CityPicker";
import Weathercode from "../../lib/Weathercode";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
type Props = {
  city: string;
  results: Root;
  lat: string;
  long: string;
};
function SideBar({ results, city, lat, long }: Props) {
  return (
    <div className="text-white bg-gradient-to-br from-[#0c417a] to-[#3579c2] p-10">
      <div className="">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-sm text-gray-400">
          {" "}
          Lat/Long : {lat}, {long}{" "}
        </p>
      </div>
      <CityPicker />
      <hr className="my-5" />
      <div className="flex items-center justify-between space-x-10">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-extralight py-2">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="font-extrabold text-xl uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className="my-5" />
      <div>
        <Image
          src={`https://www.weatherbit.io/static/img/icons/${
            Weathercode[results.current_weather.weathercode].icon
          }.png`}
          alt="weather_icon"
          height="100"
          width="100"
        />
        <div className="flex items-center justify-between">
          <p className="text-6xl font-semibold">
            {results.current_weather.temperature.toFixed(1)}°C
          </p>
          <p className="font-extralight text-xl">
            {Weathercode[results.current_weather.weathercode].label}
          </p>
        </div>
      </div>
      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md  bg-[#0c417a]/20 ">
          <SunIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md  bg-[#0c417a]/20">
          <MoonIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
