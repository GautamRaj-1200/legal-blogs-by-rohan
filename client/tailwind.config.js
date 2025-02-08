/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage:
          "linear-gradient(to bottom right,rgba(239,99,82,0.5),rgba(38, 37, 34,0.6),rgba(159,220,38,0.3)),url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
    colors: {
      light: "#ffffff",
      dark: "#262522", //rgb(38, 37, 34)
      primary: "#EE6352", // rgb(239,99,82)
      secondary: "#9FDC26", //rgb(159,220,38)
      grey: "#4b4949",
    },
    fontSize: {
      headerOne: ["5rem", { lineHeight: "100%", fontWeight: "800" }],
      headerTwo: ["2.5rem", { lineHeight: "120%", fontWeight: "700" }],
      headerThree: ["1.5rem", { lineHeight: "120%", fontWeight: "700" }],
      paraOne: ["1.3125rem", { lineHeight: "140%", fontWeight: "400" }],
      paraTwo: ["1rem", { lineHeight: "140%", fontWeight: "300" }],
      postText: ["1.2rem", { lineHeight: "150%" }],
      subtitle: ["1.125rem", { lineHeight: "100%", fontWeight: "600" }],
      tagline: ["1.125rem", { lineHeight: "100%", fontWeight: "500" }],
      buttonText: [
        "0.875rem",
        { lineHeight: "100%", fontWeight: "500", letterSpacing: "0.1rem" },
      ],
      smallText: ["0.75rem", { lineHeight: "120%", fontWeight: "500" }],
      linkText: ["1rem", { lineHeight: "120%", fontWeight: "400" }],
      boldText: ["1rem", { lineHeight: "120%", fontWeight: "500" }],
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
      montserrat: "Montserrat, sans-serif",
    },
  },
  plugins: [],
};
