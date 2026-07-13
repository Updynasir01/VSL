import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E0C',
        deep: '#07130B',
        panel: '#11150F',
        paper: '#F1F3EF',
        night: '#10140F',
        accent: '#34C76F',
        'accent-bright': '#5FDD8F',
        'accent-deep': '#1E8A4B',
        mist: '#AEB8AE',
        fog: '#C9D2C9',
        stone: '#5A645A',
        dim: '#6E786E',
        light: '#E8ECE8',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-instrument-sans)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
