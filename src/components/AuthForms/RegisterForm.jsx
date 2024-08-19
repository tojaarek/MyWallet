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
  UserIcon,
  ErrorMessage,
  Success,
} from '../AuthForms/AuthForms.styled';
import registerSchema from '../../validators/register.schema';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/users.actions';
import {
  selectUsersIsLoading,
  selectUsersIsRegistered,
} from '../../redux/selectors/users.selectors';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectUsersIsLoading);
  const isRegistered = useSelector(selectUsersIsRegistered);
  const [countdown, setCountdown] = useState(4);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      const { name, email, password } = values;
      const registerData = {
        name,
        email,
        password,
      };
      dispatch(register(registerData));
    },
  });

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        navigate('/');
      }, 4000);
      setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [isRegistered, countdown, navigate]);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isRegistered ? (
            <>
              <Loader />
              <Success>
                Your registration has been successfully completed! You will be
                redirected to the login page in {countdown} sec.
              </Success>
            </>
          ) : (
            <>
              <Form
                name="registerForm"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <Logo />
                <InputWrapper>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    $isValid={!formik.touched.name || !formik.errors.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <ErrorMessage>{formik.errors.name}</ErrorMessage>
                  )}
                  <UserIcon
                    $isValid={!formik.touched.name || !formik.errors.name}
                  />
                </InputWrapper>
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
                  <EmailIcon
                    $isValid={!formik.touched.email || !formik.errors.email}
                  />
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
                    $isValid={
                      !formik.touched.password || !formik.errors.password
                    }
                  />
                  {formik.touched.password && formik.errors.password && (
                    <ErrorMessage>{formik.errors.password}</ErrorMessage>
                  )}
                  <LockIcon
                    $isValid={
                      !formik.touched.password || !formik.errors.password
                    }
                  />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    maxLength="30"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                    $isValid={
                      !formik.touched.passwordConfirm ||
                      !formik.errors.passwordConfirm
                    }
                  />
                  {formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm && (
                      <ErrorMessage>
                        {formik.errors.passwordConfirm}
                      </ErrorMessage>
                    )}
                  <LockIcon
                    $isValid={
                      !formik.touched.passwordConfirm ||
                      !formik.errors.passwordConfirm
                    }
                  />
                </InputWrapper>
                <ButtonColor type="submit" text="register" />
              </Form>
              <ButtonTransparent
                isLink={true}
                to="/"
                type="button"
                text="log in"
              />
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default RegisterForm;
