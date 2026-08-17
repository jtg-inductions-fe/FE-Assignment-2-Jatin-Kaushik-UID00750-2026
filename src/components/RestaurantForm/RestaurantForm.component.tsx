import { useState } from 'react';

import { FieldPath, FormProvider, useForm } from 'react-hook-form';

import { Step, StepLabel } from '@mui/material';

import { UiButton } from '@components/UiButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { RestaurantFormValues } from '@types';

import { RestaurantAddressForm } from './RestaurantAddressForm.component';
import { RestaurantBasicInfoForm } from './RestaurantBasicInfoForm.component';
import {
    defaultFormValues,
    RESTAURANT_FORM_FIELD_NAMES,
    RESTAURANT_FORM_STEPS,
} from './RestaurantForm.constants';
import { restaurantValidationSchema } from './RestaurantForm.schema';
import * as FormStyles from './RestaurantForm.styles';
import { RestaurantFormProps } from './RestaurantForm.types';
import { RestaurantHoursForm } from './RestaurantHoursForm.component';

/**
 * RestaurantForm Component
 * A multi-step form for creating or editing restaurant details
 */

export const RestaurantForm = ({
    initialValues,
    onSubmit,
    initialStep,
}: RestaurantFormProps) => {
    const [activeStep, setActiveStep] = useState(initialStep || 0);

    const methods = useForm<RestaurantFormValues>({
        resolver: yupResolver(restaurantValidationSchema),
        defaultValues: initialValues || defaultFormValues,
        mode: 'onTouched',
    });

    const {
        handleSubmit,
        trigger,
        formState: { isSubmitting },
    } = methods;

    /** validates current form inputs and handle next step navigation */
    const handleNext = async () => {
        let fieldsToValidate: FieldPath<RestaurantFormValues>[] = [];
        if (activeStep === 0)
            fieldsToValidate = [
                RESTAURANT_FORM_FIELD_NAMES.NAME,
                RESTAURANT_FORM_FIELD_NAMES.DESCRIPTION,
                RESTAURANT_FORM_FIELD_NAMES.CUISINIES,
                RESTAURANT_FORM_FIELD_NAMES.VEG_TYPE,
                RESTAURANT_FORM_FIELD_NAMES.IMAGE_URL,
            ];
        if (activeStep === 1)
            fieldsToValidate = [
                RESTAURANT_FORM_FIELD_NAMES.ADDRESS_STREET,
                RESTAURANT_FORM_FIELD_NAMES.ADDRESS_CITY,
                RESTAURANT_FORM_FIELD_NAMES.ADDRESS_STATE,
                RESTAURANT_FORM_FIELD_NAMES.ADDRESS_PINCODE,
            ];

        const isStepValid = await trigger(fieldsToValidate);
        if (isStepValid) {
            setActiveStep((prev) => prev + 1);
        }
    };

    /** Handle back step navigation */
    const handleBack = () => setActiveStep((prev) => prev - 1);

    return (
        <FormProvider {...methods}>
            <FormStyles.FormCard elevation={2}>
                <FormStyles.FormStepper
                    activeStep={activeStep}
                    alternativeLabel
                >
                    {RESTAURANT_FORM_STEPS.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </FormStyles.FormStepper>

                <form>
                    {activeStep === 0 && <RestaurantBasicInfoForm />}

                    {activeStep === 1 && <RestaurantAddressForm />}

                    {activeStep === 2 && <RestaurantHoursForm />}

                    <FormStyles.ButtonContainer>
                        <UiButton
                            disabled={activeStep === 0 || isSubmitting}
                            onClick={handleBack}
                            variant="outlined"
                        >
                            Back
                        </UiButton>
                        {activeStep < RESTAURANT_FORM_STEPS.length - 1 ? (
                            <UiButton
                                variant="contained"
                                loading={isSubmitting}
                                disabled={isSubmitting}
                                onClick={() => void handleNext()}
                            >
                                Next
                            </UiButton>
                        ) : (
                            <UiButton
                                variant="contained"
                                loading={isSubmitting}
                                disabled={isSubmitting}
                                onClick={() => void handleSubmit(onSubmit)()}
                            >
                                Save Restaurant
                            </UiButton>
                        )}
                    </FormStyles.ButtonContainer>
                </form>
            </FormStyles.FormCard>
        </FormProvider>
    );
};
