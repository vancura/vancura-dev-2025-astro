/** Component-specific configuration constants. */
export const COMPONENT_CONFIG = {
    // Base Head constants.
    HEAD: {
        META: {
            LANGUAGE: 'English',
            AUTHOR: 'Václav Vančura',
            REFERRER: 'origin',
            URL: 'https://vancura.dev'
        }
    },

    // MDX Wrapper constants.
    MDX: {
        FALLBACK_MESSAGE: 'Failed to load content. Please try refreshing the page.'
    }
} as const;

// Export specific configs for direct imports.
export const { HEAD, MDX } = COMPONENT_CONFIG;
