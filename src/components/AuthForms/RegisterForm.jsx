import ButtonColor from '../shared/ButtonColor/ButtonColor'
import ButtonTransparent from '../shared/ButtonTransparent/ButtonTransparent'
import {
  Form,
  InputWrapper,
  Input,
  Logo,
  Wrapper,
  EmailIcon,
  LockIcon,
  UserIcon,
} from '../AuthForms/AuthForms.styled'

const rules = {
  name: 'required|alpha',
  email: 'required|email',
  password: 'required|min:6|max:30',
  passwordConfirm: 'same:password',
}

const messages = {
  'required': '{{ field }} is required',
  'email.email': 'The email address is invalid',
  'password.min': 'At least 6 characters',
  'password.max': '30 characters maximum',
  'same': 'The password doesn`t match'
 }

const RegisterForm = () => {
  return (
    <Wrapper>
      <Form name="registerForm" autoComplete="off">
        <Logo />
        <InputWrapper>
          <Input name="name" placeholder="Name" />
          <UserIcon />
        </InputWrapper>
        <InputWrapper>
          <Input name="email" placeholder="Email" />
          <EmailIcon />
        </InputWrapper>
        <InputWrapper>
          <Input name="password" placeholder="Password" />
          <LockIcon />
        </InputWrapper>
        <InputWrapper>
          <Input name="passwordConfirm" placeholder="Confirm password" />
          <LockIcon />
        </InputWrapper>
        <ButtonColor text="register" />
      </Form>
      <ButtonTransparent text="log in" />
    </Wrapper>
  )
}

export default RegisterForm
