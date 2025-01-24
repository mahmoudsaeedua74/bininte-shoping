/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any additional paths where you use Tailwind classes
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        textColor: "#22262A",
        mainColor: "#33A0FF",
        secondColor: "#C1C8CE",
        salmonColor: "#FF4858",
        borderColor: "#F6F7F8",
      },
    },
  },
  plugins: [],
} 

