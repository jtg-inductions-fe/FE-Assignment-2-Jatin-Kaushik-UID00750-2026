import { LinkProps as RouterLinkProps } from 'react-router-dom';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)<ButtonProps & RouterLinkProps>(
    ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        transition: 'all 0.2s ease-in-out',
        boxShadow: 'none',
    }),
);
