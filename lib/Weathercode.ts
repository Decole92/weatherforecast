const Weathercode: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "c01d",
    label: "Clear sky",
  },
  1: {
    icon: "c02d",
    label: "Mainly clear",
  },
  2: {
    icon: "c03d",
    label: "Partly cloudy",
  },
  3: {
    icon: "c04d",
    label: "Overcast",
  },
  4: {
    icon: "s05d",
    label: "Fog",
  },
  45: {
    icon: "so5d",
    label: "Deposit rime fog",
  },
  48: {
    icon: "s05d",
    label: "Fog",
  },
  51: {
    icon: "d015",
    label: "Drizzle",
  },
  53: {
    icon: "d01d",
    label: "Drizzle",
  },
  55: {
    icon: "d01d",
    label: "Freezing Drizzle",
  },
  61: {
    icon: "r01d",
    label: "Rain",
  },

  63: {
    icon: "r01d",
    label: "Rain",
  },
  65: {
    icon: "r01d",
    label: "Rain",
  },

  66: {
    icon: "f01d",
    label: "Freezing Rain",
  },
  67: {
    icon: "f01d",
    label: "Freezing Rain",
  },
  75: {
    icon: "s02d",
    label: "Snow",
  },
  77: {
    icon: "s02d",
    label: "Snow Grains",
  },
  80: {
    icon: "r02d",
    label: "Rain Showers",
  },
  81: {
    icon: "r02d",
    label: "Rain Showers",
  },
  82: {
    icon: "r02d",
    label: "Rain Showers",
  },
  85: {
    icon: "s01d",
    label: "Snow Showers",
  },
  86: {
    icon: "s01d",
    label: "Snow Showers",
  },
  95: {
    icon: "t04d",
    label: "Thurderstorm",
  },
  96: {
    icon: "t04d",
    label: "Thurderstorm",
  },
  99: {
    icon: "t04d",
    label: "Thurderstorm",
  },
};
export default Weathercode;
