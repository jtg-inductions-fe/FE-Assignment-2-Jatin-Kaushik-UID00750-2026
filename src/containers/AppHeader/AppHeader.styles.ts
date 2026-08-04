import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { Box, BoxProps, styled } from '@mui/material';

export const AppHeaderContainer = styled(Box)<BoxProps>(({ theme }) => ({
    paddingInline: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
    marginBottom: theme.spacing(6),
}));

export const AppHeaderWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBlock: theme.spacing(4),
    width: '100%',
    maxWidth: '120rem',
    marginInline: 'auto',
}));

export const LogoBox = styled(Box)<BoxProps & RouterLinkProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
    width: 'max-content',
    padding: theme.spacing(0.5, 4, 0.5, 1),
    backgroundColor: theme.palette.common.white,
    borderRadius: '99rem',
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    textDecoration: 'none',
}));

export const HeaderActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(4),
}));
