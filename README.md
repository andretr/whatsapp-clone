--Creation steps


<!-- Create vite project -->
yarn create vite 
<!-- Give a name and select React + Typescript -->
<!-- Install base dependencies -->
yarn
<!-- Install TailwindCSS and dependencies -->
yarn add tailwindcss postcss autoprefixer --dev
<!-- Create tailwind.config.js and postcss.config.js -->
npx tailwindcss init -p
<!-- Add paths to all files in tailwind.config.js -->
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
<!-- Add the @tailwind directives for each of Tailwind’s layers to ./src/index.css file -->
@tailwind base;
@tailwind components;
@tailwind utilities;
<!-- Run app -->
yarn dev