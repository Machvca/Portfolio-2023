/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        "green-4": "#001219",
        "green-3": "#005F73",
        "green-2": "#0A9396",
        "green-1": "#94D2BD",
        "orange-1": "#E9D8A6",
        "orange-2": "#EE9B00",
        "orange-3": "#CA6702",
        "red-1": "#BB3E03",
        "red-2": "#AE2012",
        "red-3": "#9B2226",
        "adark": "#0F0D0D",
      },
      fontFamily: {
        'Noto': ['Noto Sans Mono', 'monospace']
      }
    },
  },
};
