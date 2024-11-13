import type { Config } from "tailwindcss";
import daisyUi from "daisyui";
import themes from "daisyui/src/theming/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-bg-dark": "",
        "login-bg-light": "url(/login-bg-light.svg)",
      },
    },
  },
  plugins: [daisyUi],
  daisyui: {
    themes: [
      {
        light: {
          ...themes["light"],
          primary: "oklch(48.93% 0.214 284.19)",
          "base-100": "oklch(95.7761% 0.005767 264.532118)",
          "base-200": "oklch(91.88% 0.005 264.532118)",
          "base-300": "oklch(86.65% 0.007 264.532118)",
          "base-content": "oklch(37.18% 0.049 275.72)",
          error: "oklch(78.12% 0.177 24.78)",
          warning: "oklch(86% 0.162 93.6)",
          success: "oklch(78.35% 0.187 147.6)",
          info: "oklch(78.9% 0.125 245.01)",
          "--rounded-btn": "0.3rem",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
