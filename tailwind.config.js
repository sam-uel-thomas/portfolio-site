/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["GeneralSans", "ui-sans-serif", "system-ui"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                'grow-shrink': {
                  '0%': { 'height': '0%', 'opacity': '1' },
                  '50%': { 'height': '100%', 'opacity': '1' },
                  '75%': { 'height': '100%', 'opacity': '0' },
                  '100%': { 'height': '0%', 'opacity': '0' },
                }
              },
              animation: {
                'grow-shrink': 'grow-shrink 3s infinite',
              }
        },
    },
    plugins: [],
};