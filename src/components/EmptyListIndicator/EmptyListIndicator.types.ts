import { ReactNode } from 'react';

/**
 * Custom props for the presentational EmptyListIndicator component.
 */
export interface EmptyListIndicatorProps {
    /** Main contextual header message */
    title: string;
    /** Comprehensive explanatory secondary text statement */
    description: string;
    /** Optional icon slot accepting custom vector graphic nodes or custom components */
    icon?: ReactNode;
}
