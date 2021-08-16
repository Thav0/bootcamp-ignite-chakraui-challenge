import { extendTheme, Theme } from "@chakra-ui/react";

export const theme = extendTheme<Theme>({
  colors: {
    gray: {
      "100": "#F5F8FA",
      "400": "#dadada",
      "600": "#999999",
      "800": "#47585B",
    },
    orange: {
      "900": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.900",
      },
    },
  },
});
