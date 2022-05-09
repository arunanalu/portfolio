module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mayuGreen': 'rgb(0, 194, 0)'
      },
      keyframes: {
        'scaleInCenter': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          }
        }
      },
      animation: {
        'scaleInCenter': 'scaleInCenter 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      }
    },
  },
  plugins: [],
}
