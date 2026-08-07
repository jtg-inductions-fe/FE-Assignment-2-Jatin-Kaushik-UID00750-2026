import { styled, TextField } from '@mui/material';

export const StyledStockField = styled(TextField)(({ theme }) => ({
    width: '10rem',
    marginTop: theme.spacing(1),
    '& .MuiInputBase-input': {
        textAlign: 'center',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
    },
    '& .MuiFormLabel-root': {
        textAlign: 'center',
        width: '100%',
        top: -4,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
    },
}));
