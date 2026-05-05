import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF7',
        ink: '#1F1F1D',
        mute: '#6B6B66',
        sage: '#5C6B4F',
        line: '#E8E6DF',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        body: ['17px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
export default config;
