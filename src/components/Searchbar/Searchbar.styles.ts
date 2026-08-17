import { InputBase, styled } from '@mui/material';

export const StyledSearchbar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(2),
    width: '100%',
    border: `2px solid ${theme.palette.grey[200]}`,
    maxWidth: theme.typography.pxToRem(600),
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 3),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(3, 3, 3, 0),
        fontSize: theme.typography.pxToRem(18),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(6)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));
