import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '7xl': ['70px', '1.3'],
        '6xl': ['50px', '1.3'],
        '5xl': ['3rem', '1.2'],
        '4xl': ['2.25rem', '2.8rem'],
        base: ['15px', '1.2'],
      },
      margin: {
        'featured': '25px 0',
      },
      height: {
        'tier': '600px',
        'featured': '650px',
      },
      colors: {
        page: 'white',
        accent: 'var(--color-accent)',
        'dark-card': 'rgb(23, 23, 23)',
        'pricing-card-border': 'rgb(230,230,230)',
        primary: 'rgba(0,5,0,0.8)',
        'primary-inv': 'rgb(230,230,230)',
        'secondary-inv': 'rgb(150,150,150)',
        secondary: 'rgba(0,0,0,0.6)',
        tertiary: 'rgba(0,0,0,0.4)',
        'teriary-inv': 'rgba(255,255,255,0.4)',
      },
    },
  },
  plugins: [],
}
export default config
