import { ComponentType } from 'react';

import { UserRole } from '@types';

export interface RoleOptions {
    value: UserRole;
    label: string;
    icon: ComponentType;
}

export interface RoleToggleOptions {
    roles: Array<RoleOptions>;
    value: UserRole;
    onChange: (value: string) => void;
    isLoading: boolean;
}
