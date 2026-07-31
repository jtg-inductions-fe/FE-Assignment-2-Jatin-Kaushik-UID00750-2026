import * as yup from 'yup';

import { loginSchema, signupSchema } from './authSchemas';

export type SignupFormData = yup.InferType<typeof signupSchema>;

export type LoginFormData = yup.InferType<typeof loginSchema>;
