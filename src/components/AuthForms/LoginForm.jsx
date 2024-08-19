import ButtonColor from '../ButtonColor/ButtonColor';
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent';
import {
  Form,
  InputWrapper,
  Input,
  Logo,
  Wrapper,
  EmailIcon,
  LockIcon,
  ErrorMessage,
} from '../AuthForms/AuthForms.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import loginSchema from '../../validators/login.schema';
import { login } from '../../redux/actions/users.actions';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      const loginData = {
        email,
        password,
      };
      dispatch(login(loginData));
    },
  });

  return (
    <Wrapper>
      <Form name="loginForm" autoComplete="off" onSubmit={formik.handleSubmit}>
        <Logo />
        <InputWrapper>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            $isValid={!formik.touched.email || !formik.errors.email}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          )}
          <EmailIcon $isValid={!formik.touched.email || !formik.errors.email} />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            maxLength="30"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            $isValid={!formik.touched.password || !formik.errors.password}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          )}
          <LockIcon
            $isValid={!formik.touched.password || !formik.errors.password}
          />
        </InputWrapper>
        <ButtonColor type="submit" text="log in" />
      </Form>
      <ButtonTransparent
        isLink={true}
        to="/register"
        type="button"
        text="register"
      />
    </Wrapper>
  );
};

export default LoginForm;
