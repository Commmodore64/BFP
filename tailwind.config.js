/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper_pattern: "url('/src/assets/WallpaperBlur.svg)",
      },
    },
  },
  plugins: [],
};
