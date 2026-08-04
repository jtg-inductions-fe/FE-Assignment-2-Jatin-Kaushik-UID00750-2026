import { styled } from '@mui/material/styles';

export const IndicatorContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(8, 2),
    width: '100%',
    minHeight: '35rem',
}));

export const IconWrapper = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.disabled,
    display: 'inline-flex',
    '& svg': {
        fontSize: '3.5rem',
    },
}));

export const TextWrapper = styled('div')(({ theme }) => ({
    maxWidth: '48rem',
    marginBottom: theme.spacing(3),
}));
