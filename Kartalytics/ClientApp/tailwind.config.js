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
        },
        extend: {
            spacing: {
                '1/24': '4.166667%',
                '1.25pct': '1.25%'
            },
            height: {
                '9.1vw': '9.1vw',
                '18.2vw': '18.2vw'
            },
            width: {
                '27.5pct': '27.5%'
            }
        }
    },
    variants: {
        extend: {
            borderRadius: ['first', 'last']
        }
    }
}