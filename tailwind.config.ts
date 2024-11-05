import type { Config } from "tailwindcss";
// import theme from "@/constants/theme.json";
import fs from "fs";
import path from "path";

const theme = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "src/constants/theme.json"), "utf-8")
);

const generateColorUtilities = (themeColors: {
  [key: string]: { [key: string]: string };
}) => {
  const colorUtilities: { [key: string]: { [key: string]: string } } = {};
  Object.entries(themeColors).forEach(([colorName, colorShades]) => {
    colorUtilities[colorName] = colorShades;
  });
  return colorUtilities;
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: generateColorUtilities(theme.colors),
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      //   primary: {
      //     100: theme.primary[100],
      //     200: theme.primary[200],
      //     300: theme.primary[300],
      //     400: theme.primary[400],
      //     500: theme.primary[500],
      //     600: theme.primary[600],
      //     700: theme.primary[700],
      //     800: theme.primary[800],
      //     900: theme.primary[900],
      //   },
      //   secondary: {
      //     100: theme.secondary[100],
      //     200: theme.secondary[200],
      //     300: theme.secondary[300],
      //     400: theme.secondary[400],
      //     500: theme.secondary[500],
      //     600: theme.secondary[600],
      //     700: theme.secondary[700],
      //     800: theme.secondary[800],
      //     900: theme.secondary[900],
      //   },
      //   success: {
      //     100: theme.success[100],
      //     200: theme.success[200],
      //     300: theme.success[300],
      //     400: theme.success[400],
      //     500: theme.success[500],
      //     600: theme.success[600],
      //     700: theme.success[700],
      //     800: theme.success[800],
      //     900: theme.success[900],
      //   },
      //   warning: {
      //     100: theme.warning[100],
      //     200: theme.warning[200],
      //     300: theme.warning[300],
      //     400: theme.warning[400],
      //     500: theme.warning[500],
      //     600: theme.warning[600],
      //     700: theme.warning[700],
      //     800: theme.warning[800],
      //     900: theme.warning[900],
      //   },
      //   error: {
      //     100: theme.error[100],
      //     200: theme.error[200],
      //     300: theme.error[300],
      //     400: theme.error[400],
      //     500: theme.error[500],
      //     600: theme.error[600],
      //     700: theme.error[700],
      //     800: theme.error[800],
      //     900: theme.error[900],
      //   },
      //   white: {
      //     100: theme.white[100],
      //     200: theme.white[200],
      //     300: theme.white[300],
      //     400: theme.white[400],
      //     500: theme.white[500],
      //     600: theme.white[600],
      //     700: theme.white[700],
      //     800: theme.white[800],
      //     900: theme.white[900],
      //   },
      //   black: {
      //     100: theme.black[100],
      //     200: theme.black[200],
      //     300: theme.black[300],
      //     400: theme.black[400],
      //     500: theme.black[500],
      //     600: theme.black[600],
      //     700: theme.black[700],
      //     800: theme.black[800],
      //     900: theme.black[900],
      //   },
      //   gray: {
      //     100: theme.gray[100],
      //     200: theme.gray[200],
      //     300: theme.gray[300],
      //     400: theme.gray[400],
      //     500: theme.gray[500],
      //     600: theme.gray[600],
      //     700: theme.gray[700],
      //     800: theme.gray[800],
      //     900: theme.gray[900],
      //   },
      // },
      // borderColor: {
      //   'primary-100': theme.primary[100],
      //   'primary-200': theme.primary[200],
      //   'primary-300': theme.primary[300],
      //   'primary-400': theme.primary[400],
      //   'primary-500': theme.primary[500],
      //   'primary-600': theme.primary[600],
      //   'primary-700': theme.primary[700],
      //   'primary-800': theme.primary[800],
      //   'primary-900': theme.primary[900],
      //   "black-100": theme.black[900],
      // },
      // outlineColor: {

      // },
      maxWidth: {
        "screen-1.5xl": "1440px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        noto: ["Noto Serif", "serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
