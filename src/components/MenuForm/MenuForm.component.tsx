import { FormProvider, useForm } from 'react-hook-form';

import {
    FormFieldRow,
    FormSelect,
    FormTextField,
} from '@components/FormComponents';
import { UiButton } from '@components/UiButton';
import { yupResolver } from '@hookform/resolvers/yup';

import { VEG_OPTIONS } from './MenuForm.config';
import { defaultMenuFormValues } from './MenuForm.constants';
import { menuFormSchema } from './MenuForm.schema';
import * as S from './MenuForm.styles';
import { MenuFormProps, MenuItemFormValues } from './MenuForm.types';

/** MenuForm component
 * A form component for creating or editing menu items.
 */
export const MenuForm = ({
    menuItemId,
    initialValues,
    categories,
    onSubmit,
}: MenuFormProps) => {
    const isEditMode = Boolean(menuItemId);

    const methods = useForm<MenuItemFormValues>({
        resolver: yupResolver(menuFormSchema),
        defaultValues: initialValues || defaultMenuFormValues,
    });

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const categoryOptions = categories.map((cat) => ({
        value: cat.id,
        label: cat.name,
    }));

    return (
        <FormProvider {...methods}>
            <form>
                <S.FormContainer>
                    <S.FormHeader variant="h5" component="h2">
                        {isEditMode ? 'Edit Menu Item' : 'Create New Menu Item'}
                    </S.FormHeader>

                    <S.FieldsWrapper>
                        <FormFieldRow label="Item Name" htmlFor="name">
                            <FormTextField name="name" control={control} />
                        </FormFieldRow>

                        <FormFieldRow label="Category" htmlFor="categoryId">
                            <FormSelect
                                name="categoryId"
                                control={control}
                                options={categoryOptions}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Description" htmlFor="description">
                            <FormTextField
                                name="description"
                                control={control}
                                multiline
                                rows={3}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Price (₹)" htmlFor="price">
                            <FormTextField
                                name="price"
                                type="number"
                                control={control}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Available Stock" htmlFor="stock">
                            <FormTextField
                                name="stock"
                                type="number"
                                control={control}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Veg Type" htmlFor="vegType">
                            <FormSelect
                                name="vegType"
                                control={control}
                                options={VEG_OPTIONS}
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Display Image URL"
                            htmlFor="imageUrl"
                        >
                            <FormTextField name="imageUrl" control={control} />
                        </FormFieldRow>
                    </S.FieldsWrapper>

                    <S.ActionButtonGroup>
                        <UiButton
                            variant="contained"
                            color="primary"
                            onClick={() => void handleSubmit(onSubmit)()}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Saving...' : 'Save Item'}
                        </UiButton>
                    </S.ActionButtonGroup>
                </S.FormContainer>
            </form>
        </FormProvider>
    );
};
