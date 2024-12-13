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
    safelist: [
        'bg-fire',
        'bg-grass',
        'bg-electric',
        'bg-water',
        'bg-ground',
        'bg-rock',
        'bg-fairy',
        'bg-poison',
        'bg-bug',
        'bg-dragon',
        'bg-psychic',
        'bg-flying',
        'bg-fighting',
        'bg-normal'
    ],    
    theme: {
        extend: {
            colors:{
                fire: '#FDDFDF',
                grass: '#DEFDE0',
                electric: '#FCF7DE',
                water: '#DEF3FD',
                ground: '#f4e7da',
                rock: '#d5d5d4',
                fairy: '#fceaff',
                poison: '#98d7d5',
                bug: '#f8d5a3',
                dragon: '#97b3e6',
                psychic: '#eaeda1',
                flying: '#F5F5F5',
                fighting: '#E6E0D4',
                normal: '#F5F5F5',
                "sb-track": "#9ca3af",
                "sb-thumb": "#1f2937",
                footerText: "rgb(24, 19, 19)",
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
            lineHeight: {
                normal: "1.6",
            },
            spacing: {
                "sb-size": "13px",
            },
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar")({ nocompatible: true }),
        require("tailwind-scrollbar")({ nocompatible: true }),
    ],
};
