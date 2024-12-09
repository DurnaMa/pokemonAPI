/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{html,js}",
        "./templates/**/*.html",
        "./index.html",
        "./script.js",
        "./js/include-html.js"
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
            lineHeight: {
                normal: "1.6",
            },
            spacing: {
                "sb-size": "13px",
            },
            colors: {
                "sb-track": "#9ca3af",
                "sb-thumb": "#1f2937",
                footerText: "rgb(24, 19, 19)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar")({ nocompatible: true }),
        require("tailwind-scrollbar")({ nocompatible: true }),
    ],
};
