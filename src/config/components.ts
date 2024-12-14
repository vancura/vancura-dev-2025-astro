import type { IHeadConfig, IMDXConfig } from '../types';

export const COMPONENT_CONFIG: {
    HEAD: IHeadConfig;
    MDX: IMDXConfig;
} = {
    HEAD: {
        META: {
            LANGUAGE: 'English',
            AUTHOR: 'Václav Vančura',
            REFERRER: 'origin'
        }
    },

    MDX: {
        FALLBACK_MESSAGE: 'Failed to load content. Please try refreshing the page.'
    }
};

export const { HEAD, MDX } = COMPONENT_CONFIG;
