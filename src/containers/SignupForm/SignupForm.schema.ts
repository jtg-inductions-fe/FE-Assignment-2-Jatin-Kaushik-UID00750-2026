import * as yup from 'yup';

import { USER_ROLES, VALIDATION_MESSAGES } from '@constant';

import { SIGNUP_FIELD_NAMES } from './SignupForm.constants';

/**
 * Validation rules and error messages for checking user signup form inputs
 */

export const signupSchema = yup
    .object({
        [SIGNUP_FIELD_NAMES.NAME]: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .min(3, VALIDATION_MESSAGES.INVALID_NAME),
        [SIGNUP_FIELD_NAMES.EMAIL]: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .email(VALIDATION_MESSAGES.INVALID_EMAIL),
        [SIGNUP_FIELD_NAMES.PASSWORD]: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .min(8, VALIDATION_MESSAGES.INVALID_PASSWORD),
        [SIGNUP_FIELD_NAMES.ROLE]: yup
            .string()
            .oneOf(
                [USER_ROLES.CUSTOMER, USER_ROLES.OWNER],
                VALIDATION_MESSAGES.INVALID_ROLE,
            )
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD),
    })
    .required();
