import { Box, styled } from '@mui/material';

export const AuthFormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
    maxWidth: '60rem',
    marginInline: 'auto',
}));

export const AuthFormPaper = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(10)} ${theme.spacing(8)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
}));

export const AuthFieldContainer = styled(Box)(({ theme }) => ({
    paddingBlock: theme.spacing(2),
    width: '100%',
}));

export const AuthFormHeader = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6),
    textAlign: 'center',
}));
