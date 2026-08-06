import { useState } from 'react';

import { FieldPath, FormProvider, useForm } from 'react-hook-form';

import { Step, StepLabel } from '@mui/material';

import { UiButton } from '@components/UiButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { RestaurantFormValues } from '@types';

import { RestaurantAddressForm } from './RestaurantAddressForm.component';
import { RestaurantBasicInfoForm } from './RestaurantBasicInfoForm.component';
import { DAYS, RESTAURANT_FORM_STEPS } from './RestaurantForm.constants';
import { restaurantValidationSchema } from './RestaurantForm.schema';
import * as FormStyles from './RestaurantForm.styles';
import { RestaurantFormProps } from './RestaurantForm.types';
import { RestaurantHoursForm } from './RestaurantHoursForm.component';

/** Default values for restaurant form fields */
const defaultFormValues: RestaurantFormValues = {
    name: '',
    description: '',
    cuisines: [],
    vegType: 'all',
    imageUrl: '',
    address: { street: '', city: '', state: '', pincode: '' },
    operatingHours: DAYS.map((day) => ({
        day,
        isClosed: false,
        openTime: '09:00',
        closeTime: '22:00',
    })),
};

/**
 * RestaurantForm Component
 * A multi-step form for creating or editing restaurant details
 *
 * @param props - Properties of the form component
 * @param props.initialValues - Existing restaurant data to pre-populate inputs during edit modes
 * @param props.onSubmit - Submission callback triggered after all form stages validate successfully
 * @param props.isSubmitLoading - Async loading state to disable action keys and trigger loaders
 */

export const RestaurantForm = ({
    initialValues,
    onSubmit,
    isSubmitLoading,
}: RestaurantFormProps) => {
    const [activeStep, setActiveStep] = useState(0);

    const methods = useForm<RestaurantFormValues>({
        resolver: yupResolver(restaurantValidationSchema),
        defaultValues: initialValues || defaultFormValues,
        mode: 'onTouched',
    });

    const { handleSubmit, trigger } = methods;

    /** Validates current form inputs and handle next step navigation */
    const handleNext = async () => {
        let fieldsToValidate: FieldPath<RestaurantFormValues>[] = [];
        if (activeStep === 0)
            fieldsToValidate = [
                'name',
                'description',
                'cuisines',
                'vegType',
                'imageUrl',
            ];
        if (activeStep === 1)
            fieldsToValidate = [
                'address.street',
                'address.city',
                'address.state',
                'address.pincode',
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
                            disabled={activeStep === 0 || isSubmitLoading}
                            onClick={handleBack}
                            variant="outlined"
                        >
                            Back
                        </UiButton>
                        <UiButton
                            variant="contained"
                            loading={isSubmitLoading}
                            disabled={isSubmitLoading}
                            onClick={() =>
                                activeStep < RESTAURANT_FORM_STEPS.length - 1
                                    ? void handleNext()
                                    : void handleSubmit(onSubmit)()
                            }
                        >
                            {activeStep < RESTAURANT_FORM_STEPS.length - 1
                                ? 'Next'
                                : 'Save Restaurant'}
                        </UiButton>
                    </FormStyles.ButtonContainer>
                </form>
            </FormStyles.FormCard>
        </FormProvider>
    );
};
