import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
    transition: 'all 0.2s ease-in-out',
    boxShadow: 'none',
}));
