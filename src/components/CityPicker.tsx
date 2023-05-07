"use client";
import React, { useState } from "react";
import { Country, City } from "country-state-city";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string | null | undefined;
    longitude: string | null | undefined;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country?.latitude,
    longitude: country?.longitude,
    isoCode: country?.isoCode,
  },
  label: country?.name,
}));

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
  };

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.label}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div>
          <label
            className="text-white flex space-x-2 items-center"
            htmlFor="country"
          >
            <GlobeAsiaAustraliaIcon className="w-7 h-7" />
            Country
          </label>
        </div>
        <Select
          className="text-black"
          onChange={handleSelectedCountry}
          value={selectedCountry}
          options={options}
        />
      </div>
      {selectedCountry && (
        <div className="space-y-2">
          <div>
            <label
              className="text-white flex space-x-2 items-center"
              htmlFor="city"
            >
              <GlobeAsiaAustraliaIcon className="w-7 h-7" />
              City
            </label>
          </div>
          <Select
            className="text-black"
            onChange={handleSelectedCity}
            value={selectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city?.latitude,
                longitude: city?.longitude,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
