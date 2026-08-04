import * as yup from 'yup';

/**
 * Validation rules and error messages for checking user signup form inputs
 */

export const signupSchema = yup
    .object({
        name: yup
            .string()
            .required('name is required')
            .min(3, 'Name must contain at least 3 characters'),
        email: yup
            .string()
            .required('Email is required')
            .email('Enter a valid email address'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters long'),
        role: yup
            .string()
            .oneOf(['customer', 'owner'], 'Please select a valid user role')
            .required('User role is required'),
    })
    .required();
