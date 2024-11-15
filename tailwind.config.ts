import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define Poppins as a custom font
      },
      colors: {
        primary: {
          Purple: 'hsl(259, 100%, 65%)',
          LightRed: 'hsl(0, 100%, 67%)',
        },
        neutral: {
          OffWhite: 'hsl(0, 0%, 94%)',
          LightGrey: 'hsl(0, 0%, 86%)',
          SmokeyGrey: 'hsl(0, 1%, 44%)',
          OffBlack: 'hsl(0, 0%, 8%)',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
