import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, sharpImageService } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
    site: 'https://vancura.dev',
    prefetch: true,
    devToolbar: { enabled: false },

    image: {
        service: sharpImageService()
    },

    integrations: [
        sitemap(),

        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                themes: {
                    light: 'light-plus',
                    dark: 'dark-plus'
                },
                transformers: [
                    {
                        pre(node) {
                            const wrapper = {
                                type: 'element',
                                tagName: 'div',
                                properties: {
                                    class: 'code-block-wrapper relative'
                                },
                                children: [
                                    {
                                        type: 'element',
                                        tagName: 'button',
                                        properties: {
                                            class: 'copy-button',
                                            'aria-label': 'Copy code to clipboard'
                                        },
                                        children: [{ type: 'text', value: 'Copy' }]
                                    },
                                    node
                                ]
                            };

                            return wrapper;
                        }
                    }
                ]
            },
            remarkPlugins: [remarkGfm, remarkSmartypants]
        }),

        (await import('@playform/compress')).default({
            Exclude: [],
            CSS: false,
            HTML: {
                'html-minifier-terser': {
                    removeAttributeQuotes: false
                }
            }
        })
    ],

    vite: {
        ssr: {
            external: ['svgo']
        },

        plugins: [tailwindcss()]
    },

    redirects: {}
});
