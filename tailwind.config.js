module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
},
  daisyui: {
    themes: [
      "light", 
      "dark",
      "business",
      {
        mytheme: {
          "primary": "#1C4F82",
         
          "secondary": "#4F46E5",
                   
          "accent": "#4C1D95",
                   
          "neutral": "#1f2937",
                   
          "base-100": "#1C1C1C",
                   
          "info": "#0369A1",
                   
          "success": "#356492",
                   
          "warning": "#7c3aed",
                   
          "error": "#38bdf8",

          "--rounded-box": "0.3rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}



