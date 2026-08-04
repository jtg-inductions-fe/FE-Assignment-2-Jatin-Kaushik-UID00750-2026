export interface FilterConfig {
    label: string;
    value: string;
}

export interface FilterToggleProps extends React.AriaAttributes {
    defaultValue: string;
    filterConfig: Array<FilterConfig>;
    onChange?: (selectedValue: string) => void;
}
