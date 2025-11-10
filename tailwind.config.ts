import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bubble GI Brand Colors
        primary: {
          DEFAULT: '#FF6B9D',
          light: '#FF8FA3',
          dark: '#E5508A',
        },
        secondary: {
          DEFAULT: '#FF8FA3',
          light: '#FFB5C5',
          dark: '#FF7A93',
        },
        accent: {
          DEFAULT: '#FFB5C5',
          light: '#FFE5EC',
          dark: '#FF9DB4',
        },
        bubble: {
          pink: '#FF6B9D',
          coral: '#FF8FA3',
          rose: '#FFB5C5',
          light: '#FFE5EC',
          dark: '#2D2D2D',
          gray: '#6B6B6B',
        },
      },
      backgroundImage: {
        'gradient-bubble': 'linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 50%, #FFB5C5 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
