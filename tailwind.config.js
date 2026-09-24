/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0C10',
        panel: '#11141B',
        line: '#252A35',
        cream: '#F3F0E8',
        electric: '#8B5CF6',
        aqua: '#5EEAD4',
      },
      boxShadow: {
        glow: '0 30px 90px rgba(139, 92, 246, 0.16)',
        soft: '0 20px 60px rgba(10, 12, 16, 0.10)',
      },
      maxWidth: {
        content: '1180px',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
