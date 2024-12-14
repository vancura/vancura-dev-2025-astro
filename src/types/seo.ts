/** Interface for SEO metadata used across pages. */
export interface ISEOMetadata {
    /** Page title. */
    title: string;

    /** Meta description. */
    description: string;

    /** Full URL for the page. */
    permalink: string;

    /** URL to the OpenGraph image. */
    ogImage?: string;

    /** Alt text for the OpenGraph image, which provides context for screen readers or when the image fails to load. */
    ogImageAlt?: string;

    /** ISO 8601 date string for article publish date. */
    articlePublishedTime?: string;

    /** ISO 8601 date string for article last modification. */
    articleModifiedTime?: string;
}
