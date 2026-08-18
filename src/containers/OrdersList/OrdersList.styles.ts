import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ListContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(4),
}));
