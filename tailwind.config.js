/** @type {import('tailwindcss').Config} */
module.exports = {
   theme: {
      extend: {
         screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
         },
      },
   },
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}" 
	],
   theme: {
      extend: {},
   },
   plugins: [],
}
