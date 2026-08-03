import {
    StyledRoleButtonGroup,
    StyledRoleContainer,
    StyledRoleToggle,
} from './RoleToggle.styles';
import { RoleToggleOptions } from './RoleToggle.types';

/**
 * Toggle component to switch exclusively between defined user account roles.
 * @param props - Component custom properties
 * @param props.roles - Array of role configurations containing values, labels, and icons
 * @param props.value - Active selected role value key identifier
 * @param props.onChange - Trigger action handler passing the newly selected role key string
 * @param props.isLoading - Submitting loading status indicator to lock selections
 */

const RoleToggle = ({
    roles,
    value,
    onChange,
    isLoading,
}: RoleToggleOptions) => (
    <StyledRoleContainer>
        <StyledRoleButtonGroup
            value={value}
            color="primary"
            exclusive
            onChange={(_, newValue: string) => {
                if (newValue !== null) {
                    onChange(newValue);
                }
            }}
            disabled={isLoading}
            fullWidth
            aria-label="User account role selection buttons"
        >
            {roles.map((role) => (
                <StyledRoleToggle
                    key={`toggle-${role.value}`}
                    value={role.value}
                    id={`toggle-${role.value}`}
                >
                    <role.icon />
                    {`Join as ${role.label}`}
                </StyledRoleToggle>
            ))}
        </StyledRoleButtonGroup>
    </StyledRoleContainer>
);

export default RoleToggle;
