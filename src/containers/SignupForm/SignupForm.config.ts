import { Fastfood, Storefront } from '@mui/icons-material';

import { RoleOptions } from '@components/RoleToggle/RoleToggle.types';
import { USER_ROLES } from '@constant';

export const rolesConfig: Array<RoleOptions> = [
    { value: USER_ROLES.CUSTOMER, label: 'Customer', icon: Fastfood },
    { value: USER_ROLES.OWNER, label: 'Owner', icon: Storefront },
];
