import { ComponentType } from 'react';

import { UserRole } from '@types';

/** Configuration options for user role */
export interface RoleOptions {
    /** Value of the user role */
    value: UserRole;
    /** Label for the user role */
    label: string;
    /** Icon for the user role */
    icon: ComponentType;
}

/** Options for the role toggle component */
export interface RoleToggleOptions {
    /** Array of role configurations containing values, labels, and icons */
    roles: Array<RoleOptions>;
    /** Active selected role value key identifier */
    value: UserRole;
    /** Action handler passing the newly selected role key string */
    onChange: (value: string) => void;
    /** Submitting loading status indicator to lock selections */
    isLoading: boolean;
}
