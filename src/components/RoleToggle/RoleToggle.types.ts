import { ComponentType } from 'react';

import { UserRole } from '@types';

/**
 * Defines the configuration for a user role
 */
export interface RoleOptions {
    value: UserRole;
    label: string;
    icon: ComponentType;
}

/**
 * Defines the properties accepted by a user role toggle component
 */
export interface RoleToggleOptions {
    roles: Array<RoleOptions>;
    value: UserRole;
    onChange: (value: string) => void;
    isLoading: boolean;
}
