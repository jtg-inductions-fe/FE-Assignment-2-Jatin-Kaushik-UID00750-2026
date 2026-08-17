import {
    styled,
    ToggleButton,
    ToggleButtonGroup,
    toggleButtonGroupClasses,
} from '@mui/material';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
    ({ theme }) => ({
        [`& .${toggleButtonGroupClasses.grouped}`]: {
            margin: theme.spacing(1.5),
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: theme.shape.borderRadius,
            textWrap: 'nowrap',
            paddingInline: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            transition: 'background-color 0.2s ease, color 0.2s ease',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
            [theme.breakpoints.up('sm')]: {
                paddingInline: theme.spacing(3),
            },
        },

        [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
            {
                borderLeft: `1px solid ${theme.palette.grey[300]}`,
            },

        [`& .${toggleButtonGroupClasses.selected}`]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
    }),
);

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
}));
