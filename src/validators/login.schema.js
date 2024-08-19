import { object, string } from 'yup';

const loginSchema = object({
  email: string().email('Invalid email address').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(6, 'At least 6 characters')
    .max(30, 'Maximum 30 characters')
    .matches(/[A-Z]/, 'At least one uppercase')
    .matches(/[0-9]/, 'At least one digit'),
});

export default loginSchema;
