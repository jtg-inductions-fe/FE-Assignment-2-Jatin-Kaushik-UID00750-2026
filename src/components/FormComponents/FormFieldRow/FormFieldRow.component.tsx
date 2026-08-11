import { Typography } from '@mui/material';

import { FormFieldContainer } from './FormFieldRow.styles';
import { FormFieldRowProps } from './FormFieldRow.types';

/**
 * Custom form field row component with form label and custom child fields.
 */

export const FormFieldRow = ({
    label,
    htmlFor,
    children,
}: FormFieldRowProps) => (
    <FormFieldContainer>
        {label && (
            <Typography component="label" htmlFor={htmlFor}>
                {label}
            </Typography>
        )}
        {children}
    </FormFieldContainer>
);
