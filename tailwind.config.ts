import type { Config } from "tailwindcss";

const config: Config = {
   content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pri: '#5AD8F1',
        lightPri: "#E0FAFF",
        grey: '#464646'
      },
    },
  },
  plugins: [],
};
export default config;
