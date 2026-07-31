import { styled, TextField } from '@mui/material';

export const StyledPasswordField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        fontSize: theme.typography.pxToRem(16),
    },
}));
