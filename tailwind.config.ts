import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#BD9478',
        main: '#5B4D46',
      },
      fontFamily: {
        'tan-pearl': ['Font Tan Pearl', 'sans-serif'], // Add your custom font here
        'tt-chocolates': ['TT Chocolates  Bold', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
} satisfies Config;
