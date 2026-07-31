import * as yup from 'yup';

import { signupSchema } from './SignupForm.schema';

export type SignupFormData = yup.InferType<typeof signupSchema>;
