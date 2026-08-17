/**
 * Defines the structure of an individual filter button option including text label and value
 */
export interface FilterConfig {
    label: string;
    value: string;
}

/**
 * Defines the accepted properties for the FilterToggle component
 * It inherits standard HTML accessibility attributes (like aria-label)
 */
export interface FilterToggleProps extends React.AriaAttributes {
    defaultValue: string;
    filterConfig: Array<FilterConfig>;
    onChange?: (selectedValue: string) => void;
}
