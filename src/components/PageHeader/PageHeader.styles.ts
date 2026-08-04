import { Box, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: theme.spacing(6),
    marginBlock: theme.spacing(8),
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));

export const TitleGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));

export const PageTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.text.primary,
}));

export const PageSubline = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));
