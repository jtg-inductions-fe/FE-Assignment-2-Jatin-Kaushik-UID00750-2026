export interface FallbackOptions {
    statusCode: number;
    title: string;
    description: string;
    buttonName: string;
    buttonAction?: () => void;
    ButtonIcon?: React.ElementType;
    isLink?: boolean;
    href?: string;
}
