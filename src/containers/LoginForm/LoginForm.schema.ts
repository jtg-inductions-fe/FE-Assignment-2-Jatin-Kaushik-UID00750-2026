import * as yup from 'yup';

import { VALIDATION_MESSAGES } from '@constant';

import { LOGIN_FIELD_NAMES } from './LoginForm.constants';

/**
 * Validation rules and error messages for checking user login form inputs
 */

export const loginSchema = yup
    .object({
        [LOGIN_FIELD_NAMES.EMAIL]: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .email(VALIDATION_MESSAGES.INVALID_EMAIL),
        [LOGIN_FIELD_NAMES.PASSWORD]: yup
            .string()
            .required(VALIDATION_MESSAGES.REQUIRED_FIELD)
            .min(8, VALIDATION_MESSAGES.INVALID_PASSWORD),
    })
    .required();
