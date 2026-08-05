import { useState } from 'react';

import { FieldPath, FormProvider, useForm } from 'react-hook-form';

import { Step, StepLabel } from '@mui/material';

import { UiButton } from '@components/UiButton/UiButton.component';
import { DAYS_OF_WEEK } from '@constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { RestaurantFormValues } from '@types';

import { RestaurantAddressForm } from './RestaurantAddressForm/RestaurantAddressForm';
import { RestaurantBasicInfoForm } from './RestaurantBasicInfoForm/RestaurantBasicInfoForm';
import { restaurantValidationSchema } from './RestaurantForm.schema';
import * as S from './RestaurantForm.styles';
import { RestaurantFormProps } from './RestaurantForm.types';
import { RestaurantHoursForm } from './RestaurantHoursForm/RestaurantHoursForm';

const STEPS = ['Basic Information', 'Address', 'Operating Hours'];

const DAYS = Object.values(DAYS_OF_WEEK);

const defaultFormValues: RestaurantFormValues = {
    name: '',
    description: '',
    cuisines: [],
    vegType: 'both',
    imageUrl: '',
    address: { street: '', city: '', state: '', pincode: '' },
    operatingHours: DAYS.map((day) => ({
        day,
        isClosed: false,
        openTime: '09:00',
        closeTime: '22:00',
    })),
};

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

    const handleBack = () => setActiveStep((prev) => prev - 1);

    return (
        <FormProvider {...methods}>
            <S.FormCard elevation={2}>
                <S.FormStepper activeStep={activeStep} alternativeLabel>
                    {STEPS.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </S.FormStepper>

                <form>
                    {activeStep === 0 && <RestaurantBasicInfoForm />}

                    {activeStep === 1 && <RestaurantAddressForm />}

                    {activeStep === 2 && <RestaurantHoursForm />}

                    <S.ButtonContainer>
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
                                activeStep < STEPS.length - 1
                                    ? void handleNext()
                                    : void handleSubmit(onSubmit)()
                            }
                        >
                            {activeStep < STEPS.length - 1
                                ? 'Next'
                                : 'Save Restaurant'}
                        </UiButton>
                    </S.ButtonContainer>
                </form>
            </S.FormCard>
        </FormProvider>
    );
};
