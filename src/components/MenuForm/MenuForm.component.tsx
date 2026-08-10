import { FormProvider, useForm } from 'react-hook-form';

import {
    FormFieldRow,
    FormSelect,
    FormTextField,
} from '@components/FormComponents';
import { UiButton } from '@components/UiButton';
import { yupResolver } from '@hookform/resolvers/yup';

import { VEG_OPTIONS } from './MenuForm.config';
import { menuFormSchema } from './MenuForm.schema';
import * as S from './MenuForm.styles';
import { MenuFormProps, MenuItemFormValues } from './MenuForm.types';

const defaultFormValues: MenuItemFormValues = {
    name: '',
    description: '',
    categoryId: '',
    price: 0,
    stock: 0,
    imageUrl: '',
    vegType: 'veg',
};

/** MenuForm component
 * A form component for creating or editing menu items.
 *
 * @param props - The component properties.
 * @param props.menuItemId - Optional ID of the menu item being edited. If provided, the form is in edit mode.
 * @param props.initialValues - Optional initial values for the form fields. Used when editing an existing item.
 * @param props.categories - List of available categories to populate the category dropdown.
 * @param props.onSubmit - Callback function triggered when the form is submitted with valid data.
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
        defaultValues: initialValues || defaultFormValues,
    });

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
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
                            <FormTextField
                                name="name"
                                control={control}
                                errors={errors}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Category" htmlFor="categoryId">
                            <FormSelect
                                name="categoryId"
                                control={control}
                                options={categoryOptions}
                                error={!!errors.categoryId}
                                helperText={errors.categoryId?.message}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Description" htmlFor="description">
                            <FormTextField
                                name="description"
                                control={control}
                                errors={errors}
                                multiline
                                rows={3}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Price (₹)" htmlFor="price">
                            <FormTextField
                                name="price"
                                type="number"
                                control={control}
                                errors={errors}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Available Stock" htmlFor="stock">
                            <FormTextField
                                name="stock"
                                type="number"
                                control={control}
                                errors={errors}
                            />
                        </FormFieldRow>

                        <FormFieldRow label="Veg Type" htmlFor="vegType">
                            <FormSelect
                                name="vegType"
                                control={control}
                                options={VEG_OPTIONS}
                                error={!!errors.vegType}
                                helperText={errors.vegType?.message}
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Display Image URL"
                            htmlFor="imageUrl"
                        >
                            <FormTextField
                                name="imageUrl"
                                control={control}
                                errors={errors}
                            />
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
