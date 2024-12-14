const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts}'],
    plugins: [addDynamicIconSelectors()],
    theme: {
        fontFamily: {
            heading: ['Walsheim Regular', 'sans-serif'],
            source: ['IBM Plex Mono', 'monospace']
        },

        colors: {
            debug: 'rgba(255, 0, 255, 0.33)',
            transparent: 'transparent',

            primary: {
                DEFAULT: '#2833FF',
                hover: '#8C3FFF',
                dark: '#ABAFFF',
                'dark-hover': '#CAA6FF'
            },

            accent: {
                DEFAULT: '#D200A3',
                dark: '#FF7DE2'
            },

            background: {
                DEFAULT: 'rgb(245, 245, 245)',
                dark: 'rgb(34, 34, 34)'
            },

            text: {
                DEFAULT: '#333333',
                dark: '#F5F5F5',
                muted: 'rgba(0, 0, 0, 0.5)',
                'muted-dark': 'rgba(255, 255, 255, 0.5)'
            },

            selection: {
                DEFAULT: '#222',
                dark: '#f5f5f5',
                text: 'white',
                'text-dark': 'black'
            },

            ui: {
                border: 'rgba(0, 0, 0, 0.1)',
                'border-dark': 'rgba(255, 255, 255, 0.15)',
                'border-hr': 'rgba(0, 0, 0, 0.1)',
                'border-hr-dark': 'rgba(255, 255, 255, 0.15)'
            },

            gray: {
                50: '#fafafa',
                100: '#f5f5f5',
                300: '#d4d4d4',
                600: '#666666',
                700: '#404040',
                900: '#171717'
            },

            white: 'white',
            black: 'black'
        },

        extend: {
            fontSize: {
                base: '1.1rem',
                'toc-item': '0.75rem'
            },

            spacing: {
                128: '32rem',
                64: '16rem'
            }
        }
    }
};
