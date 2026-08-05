import { USER_ROLES } from '@constant';

import { Address, UserRole } from './common.types';

/**
 * Shared core information of each type of user
 */
interface BaseUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

/**
 * Details for customer
 */
export interface Customer extends BaseUser {
    role: typeof USER_ROLES.CUSTOMER;
    address?: Address;
}

/**
 * Details for owner
 */
export interface Owner extends BaseUser {
    role: typeof USER_ROLES.OWNER;
    restaurantIds: string[];
}

/**
 * Union type combination covering any valid user in the application
 */
export type User = Customer | Owner;

/**
 * Stored user data for mock users authentication
 */
export interface StoredCredential {
    userId: string;
    email: string;
    password: string;
}

/**
 * Pre-configured profile records of users.
 */
export interface UsersSeed {
    customers: Customer[];
    owners: Owner[];
    credentials: StoredCredential[];
}
