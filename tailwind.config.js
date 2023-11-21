/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: "#6c757d",
                blue: "#97D0FD",
                powdered_blue: "#B0E0E6",
                dark: "#9FF7F6"


            }

        }
    }
    // ...
}