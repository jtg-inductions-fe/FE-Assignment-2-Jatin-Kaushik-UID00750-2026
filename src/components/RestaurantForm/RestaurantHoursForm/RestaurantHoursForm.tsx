import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox, FormControlLabel, Typography } from '@mui/material';

import { FormTextField } from '@components/FormComponents/FormTextField/FormTextField.component';
import { DAYS_OF_WEEK } from '@constant';
import { RestaurantFormValues } from '@types';

import * as S from '../RestaurantForm.styles';

const DAYS = Object.values(DAYS_OF_WEEK);

export const RestaurantHoursForm = () => {
    const {
        control,
        watch,
        getValues,
        formState: { errors },
    } = useFormContext<RestaurantFormValues>();
    return (
        <S.StepContentContainer>
            {DAYS.map((_, index) => {
                const isDayClosed = watch(`operatingHours.${index}.isClosed`);
                return (
                    <S.OperatingHoursRow key={index}>
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
                            control={control}
                            errors={errors}
                            error={!!errors.operatingHours?.[index]?.openTime}
                            helperText={
                                errors.operatingHours?.[index]?.openTime
                                    ?.message
                            }
                        />
                        <FormTextField
                            name={`operatingHours.${index}.closeTime`}
                            type="time"
                            label="Closing Time"
                            disabled={isDayClosed}
                            slotProps={{ inputLabel: { shrink: true } }}
                            control={control}
                            errors={errors}
                            error={!!errors.operatingHours?.[index]?.closeTime}
                            helperText={
                                errors.operatingHours?.[index]?.closeTime
                                    ?.message
                            }
                        />
                    </S.OperatingHoursRow>
                );
            })}
        </S.StepContentContainer>
    );
};
