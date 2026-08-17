import { Box, Paper, Stepper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(10, 4, 4, 4),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(10, 10, 4, 10),
        margin: theme.spacing(0, 4),
    },
}));

export const FormStepper = styled(Stepper)(({ theme }) => ({
    margin: theme.spacing(4, 0, 10, 0),
}));

export const StepContentContainer = styled(Box)(({ theme }) => ({
    marginBlock: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3),
}));

export const OperatingHoursRow = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(4),
    alignItems: 'center',
    padding: theme.spacing(1, 0),
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '15rem 12rem 1fr 1fr',
        gap: theme.spacing(2),
    },
}));
