const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true
    },
    purge: [
        './public/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.tsx'
    ],
    theme: {
        boxShadow: {
            rainbow: '-30px -30px 10px -25px rgba(255, 0, 0, 0.3), -30px 30px 10px -25px rgba(255, 255, 0, 0.3), 30px 30px 10px -25px rgba(0, 255, 255, 0.3), 30px -30px 10px -25px rgba(0, 0, 255, 0.3)'
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
                '12.6vw': '12.6vw',
                '25.2vw': '25.2vw'
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