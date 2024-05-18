/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        bottom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "large-top":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
        "large-bottom":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "large-top-bottom":
          "0 -20px 20px -10px rgba(0, 0, 0, 0.2), 0 20px 20px -10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-white": {
          textShadow:
            "0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
