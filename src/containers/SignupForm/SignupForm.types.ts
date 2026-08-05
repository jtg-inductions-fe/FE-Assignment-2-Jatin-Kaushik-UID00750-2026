import * as yup from 'yup';

import { signupSchema } from './SignupForm.schema';

/**
 * The auto-generated data type structure for signup form data by yup
 */
export type SignupFormData = yup.InferType<typeof signupSchema>;
