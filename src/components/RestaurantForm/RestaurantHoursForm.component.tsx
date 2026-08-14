import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox, FormControlLabel, Typography } from '@mui/material';

import { FormTextField } from '@components/FormComponents';
import { RestaurantFormValues } from '@types';

import { DAYS } from './RestaurantForm.constants';
import * as FormStyles from './RestaurantForm.styles';

/**
 * RestaurantHoursForm Component
 * Renders the structural operating hours sub-section input fields for the restaurant details form
 */

export const RestaurantHoursForm = () => {
    const { control, watch, getValues } =
        useFormContext<RestaurantFormValues>();
    return (
        <FormStyles.StepContentContainer>
            {DAYS.map((_, index) => {
                const isDayClosed = watch(`operatingHours.${index}.isClosed`);
                return (
                    <FormStyles.OperatingHoursRow key={index}>
                        <Typography variant="body1">
                            {getValues(`operatingHours.${index}.day`)}
                        </Typography>
                        <Controller
                            name={`operatingHours.${index}.isClosed`}
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={value}
                                            onChange={(e) =>
                                                onChange(e.target.checked)
                                            }
                                        />
                                    }
                                    label="Closed"
                                />
                            )}
                        />
                        <FormTextField
                            name={`operatingHours.${index}.openTime`}
                            type="time"
                            label="Opening Time"
                            disabled={isDayClosed}
                            slotProps={{ inputLabel: { shrink: true } }}
                        />
                        <FormTextField
                            name={`operatingHours.${index}.closeTime`}
                            type="time"
                            label="Closing Time"
                            disabled={isDayClosed}
                            slotProps={{ inputLabel: { shrink: true } }}
                        />
                    </FormStyles.OperatingHoursRow>
                );
            })}
        </FormStyles.StepContentContainer>
    );
};
