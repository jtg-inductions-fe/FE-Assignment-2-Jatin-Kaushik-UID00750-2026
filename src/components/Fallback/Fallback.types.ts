/**
 * Configuration options to customize fallback display page
 */

export interface FallbackOptions {
    /** Fallback status code */
    statusCode: number;
    /** Fallback title text */
    title: string;
    /** Fallback description text */
    description: string;
    /** Fallback Action button label name */
    buttonName: string;
    /** Fallback button action handler */
    buttonAction?: () => void;
    /** Fallback button icon */
    ButtonIcon?: React.ElementType;
    /** Fallback action isLink flag */
    isLink?: boolean;
    /** Fallback action link url */
    href?: string;
}
