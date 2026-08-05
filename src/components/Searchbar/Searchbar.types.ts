/**
 * Defines the properties accepted by the Searchbar component
 */

export interface SearchbarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
