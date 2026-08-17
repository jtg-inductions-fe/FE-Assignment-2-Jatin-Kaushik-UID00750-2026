import { FormProvider, useForm } from 'react-hook-form';

import {
    FormFieldRow,
    FormSelect,
    FormTextField,
} from '@components/FormComponents';
import { UiButton } from '@components/UiButton';
import { yupResolver } from '@hookform/resolvers/yup';

import { VEG_OPTIONS } from './MenuItemForm.config';
import {
    defaultMenuItemFormValues,
    MENU_ITEM_FORM_FIELD_NAMES,
} from './MenuItemForm.constants';
import { menuFormSchema } from './MenuItemForm.schema';
import {
    ActionButtonGroup,
    FieldsWrapper,
    FormContainer,
    FormHeader,
} from './MenuItemForm.styles';
import { MenuItemFormProps, MenuItemFormValues } from './MenuItemForm.types';

/** MenuItemForm component
 * A form component for creating or editing menu items.
 */
export const MenuItemForm = ({
    menuItemId,
    initialValues,
    categories,
    onSubmit,
}: MenuItemFormProps) => {
    const isEditMode = Boolean(menuItemId);

    const methods = useForm<MenuItemFormValues>({
        resolver: yupResolver(menuFormSchema),
        defaultValues: initialValues || defaultMenuItemFormValues,
    });

    const {
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
                <FormContainer>
                    <FormHeader variant="h5" component="h2">
                        {isEditMode ? 'Edit Menu Item' : 'Create New Menu Item'}
                    </FormHeader>

                    <FieldsWrapper>
                        <FormFieldRow
                            label="Item Name"
                            htmlFor={MENU_ITEM_FORM_FIELD_NAMES.NAME}
                        >
                            <FormTextField
                                name={MENU_ITEM_FORM_FIELD_NAMES.NAME}
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Category"
                            htmlFor={MENU_ITEM_FORM_FIELD_NAMES.CATEGORY_ID}
                        >
                            <FormSelect
                                name={MENU_ITEM_FORM_FIELD_NAMES.CATEGORY_ID}
                                options={categoryOptions}
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Description"
                            htmlFor={MENU_ITEM_FORM_FIELD_NAMES.DESCRIPTION}
                        >
                            <FormTextField
                                name={MENU_ITEM_FORM_FIELD_NAMES.DESCRIPTION}
                                multiline
                                rows={3}
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Price (₹)"
                            htmlFor={MENU_ITEM_FORM_FIELD_NAMES.PRICE}
                        >
                            <FormTextField
                                name={MENU_ITEM_FORM_FIELD_NAMES.PRICE}
                                type="number"
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Available Stock"
                            htmlFor={MENU_ITEM_FORM_FIELD_NAMES.STOCK}
                        >
                            <FormTextField
                                name={MENU_ITEM_FORM_FIELD_NAMES.STOCK}
                                type="number"
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Veg Type"
                            htmlFor={MENU_ITEM_FORM_FIELD_NAMES.VEG_TYPE}
                        >
                            <FormSelect
                                name={MENU_ITEM_FORM_FIELD_NAMES.VEG_TYPE}
                                options={VEG_OPTIONS}
                            />
                        </FormFieldRow>

                        <FormFieldRow
                            label="Display Image URL"
                            htmlFor={MENU_ITEM_FORM_FIELD_NAMES.IMAGE_URL}
                        >
                            <FormTextField
                                name={MENU_ITEM_FORM_FIELD_NAMES.IMAGE_URL}
                            />
                        </FormFieldRow>
                    </FieldsWrapper>

                    <ActionButtonGroup>
                        <UiButton
                            variant="contained"
                            color="primary"
                            onClick={() => void handleSubmit(onSubmit)()}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Saving...' : 'Save Item'}
                        </UiButton>
                    </ActionButtonGroup>
                </FormContainer>
            </form>
        </FormProvider>
    );
};
