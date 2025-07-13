/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            backgroundImage: {
                iphone: "url('/assets/iPhone.svg')",
            },
            fontFamily: {
                zona: ['"Zona Pro Thin"', 'sans-serif'],
            },
            colors: {
                pinkGlass: 'rgba(255, 51, 182, 0.74)',
                whiteGlass: 'rgba(240, 240, 243, 1)',
            },
            boxShadow: {
                reset: `rgba(240, 46, 170, 0.4) 0 5px,
                rgba(240, 46, 170, 0.3) 0 10px,
                rgba(240, 46, 170, 0.2) 0 15px,
                rgba(240, 46, 170, 0.1) 0 20px,
                rgba(240, 46, 170, 0.05) 0 25px`,
                cell: `rgba(255, 150, 216, 0.74) 0 0 0 2px,
               rgba(240, 46, 170, 0.47) 0 0 0 4px,
               rgba(247, 47, 175, 0.33) 0 0 0 6px,
               rgba(240, 46, 170, 0.24) 0 0 0 8px`,
            },
        },
    },
    plugins: [],
}
