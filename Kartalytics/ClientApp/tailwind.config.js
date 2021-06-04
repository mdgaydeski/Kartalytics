const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.tsx',
    ],
    theme: {
        boxShadow: {
            rainbow: '-50px -50px 15px -45px rgba(255, 0, 0, 0.3), -50px 50px 15px -45px rgba(255, 255, 0, 0.3), 50px 50px 15px -45px rgba(0, 255, 255, 0.3), 50px -50px 15px -45px rgba(0, 0, 255, 0.3)'
        },
        fontFamily: {
            display: ['SnyderSpeedbrush', ...defaultTheme.fontFamily.sans],
            sans: ['Noto Sans', ...defaultTheme.fontFamily.sans]
        }
    }
}