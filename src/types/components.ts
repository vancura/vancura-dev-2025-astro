export interface IHeadConfig {
    META: {
        LANGUAGE: string;
        AUTHOR: string;
        REFERRER: 'origin' | 'no-referrer' | 'strict-origin-when-cross-origin';
    };
}

export interface IMDXConfig {
    FALLBACK_MESSAGE: string;
}
