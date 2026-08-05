import * as yup from 'yup';

import { loginSchema } from './LoginForm.schema.ts';

/**
 * The auto-generated data type structure for login form data by yup
 */

export type LoginFormData = yup.InferType<typeof loginSchema>;
