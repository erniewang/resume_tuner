module.exports = {
  content: [
    "./*.{html,tsx,ts,jsx,js}",
    "./pages/**/*.{tsx,ts,jsx,js}",
    "./componets/**/*.{tsx,ts,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#ADD8E6",
        "start-green": "#4CAF50",
        "stop-red": "#F44336",
      },
    },
  },
  plugins: [],
  safelist: [
    "w-1/4",
    "w-2/4",
    "w-3/4",
    "w-4/4",
    "w-1/6",
    "w-2/6",
    "w-3/6",
    "w-4/6",
    "w-5/6",
    "w-6/6",
    "h-1/6",
    "h-2/6",
    "h-3/6",
    "h-4/6",
    "h-5/6",
    "h-6/6",
  ],
};
