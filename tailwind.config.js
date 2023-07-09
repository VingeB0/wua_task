/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'flash-in': {
                    '0%': {
                        backgroundColor: 'rgba(204, 236, 252, 0.4)'
                    },
                    '100%': {
                        backgroundColor: 'none',
                    },
                },
            },
            animation: {
                'flash': 'flash-in 1s linear 1', //flash animation after adding a new comment
            },
            maxHeight: {
                '830': '51.875rem', //max height app
            },
            minHeight: {
                '830': '51.875rem', //min height app
            },
            maxWidth: {
                '732': '45.75rem', //max width app
            },
            fontSize: {
                '19': '1.1875rem',
                '17': '1.0625rem',
                '12': '0.75rem',
            },
            colors: {
                'primaryBlue': '#00A1F1',
                'black': '#000',
                'white': '#FFF',
                'gray': '#E9EBED',
                'darkGray': '#ABB2BA',
                'grayGradientStart': '#D9D9D9',
                'grayGradientEnd': 'rgba(217, 217, 217, 0.00)',
            },
            borderRadius: {
                '5': '0.3rem'
            }
        },
    },
    plugins: [],
}

