import { ReactNode } from 'react';

/**
 * Custom props for the EmptyListIndicator component
 */
export interface EmptyListIndicatorProps {
    title: string;
    description: string;
    icon?: ReactNode;
}
