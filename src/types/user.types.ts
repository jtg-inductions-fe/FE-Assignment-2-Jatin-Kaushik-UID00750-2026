import { USER_ROLES } from '@constant';

import { Address, UserRole } from './common.types';

interface BaseUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

export interface Customer extends BaseUser {
    role: typeof USER_ROLES.CUSTOMER;
    address?: Address;
}

export interface Owner extends BaseUser {
    role: typeof USER_ROLES.OWNER;
    restaurantIds: string[];
}

export type User = Customer | Owner;

export interface StoredCredential {
    userId: string;
    email: string;
    password: string;
}

export interface UsersSeed {
    customers: Customer[];
    owners: Owner[];
    credentials: StoredCredential[];
}
