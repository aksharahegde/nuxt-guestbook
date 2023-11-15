import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        eggblue: {
          "50": "#eefffd",
          "100": "#c6fffa",
          "200": "#8efff7",
          "300": "#4dfbf2",
          "400": "#19e8e4",
          "500": "#00dbda",
          "600": "#00a1a4",
          "700": "#027f83",
          "800": "#086367",
          "900": "#0c5255",
          "950": "#003034",
        },
      },
    },
  },
};
