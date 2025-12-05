/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths Tailwind should scan for class names
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // safety if you ever add /pages
    "./src/**/*.{js,ts,jsx,tsx,mdx}",     // safety if you later add /src
  ],

  // In Tailwind v4, design tokens (colors, fonts, etc.)
  // are defined in your CSS using @theme (see globals.css).
  theme: {
    extend: {},
  },

  // If you ever want to use class-based dark mode instead of pure dark site:
  // darkMode: "class",

  plugins: [
    // Add official plugins here if needed:
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
};
