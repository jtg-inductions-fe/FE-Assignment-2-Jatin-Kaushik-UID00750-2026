import * as yup from 'yup';

import { loginSchema } from './LoginForm.schema.ts';

export type LoginFormData = yup.InferType<typeof loginSchema>;
