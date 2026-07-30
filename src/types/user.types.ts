import { Address, UserRole } from './common.types';

interface BaseUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    phone?: string; // Ask to keep it or not
}

/** A user who browses restaurants and places orders. */
export interface Customer extends BaseUser {
    role: 'customer';
    address?: Address;
}

/** A user who owns and manages one or more restaurants. */
export interface Owner extends BaseUser {
    role: 'owner';
    /** IDs of restaurants this partner manages — drives the "my restaurants only" filter on Discovery. */
    restaurantIds: string[];
}

/**
 * Discriminated union — narrow with `if (user.role === 'owner')`
 * to safely access `restaurantIds`, or `'customer'` to access `address`.
 */
export type User = Customer | Owner;

/** Mock credential record, separated from the public User shape */
export interface StoredCredential {
    userId: string;
    email: string;
    password: string; // plaintext for now
}
