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
} from '../AuthForms/AuthForms.styled'

const LoginForm = () => {
  return (
    <Wrapper>
      <Form name="loginForm" autoComplete="off">
        <Logo />
        <InputWrapper>
          <Input name="email" placeholder="Email" required />
          <EmailIcon />
        </InputWrapper>
        <InputWrapper>
          <Input name="password" placeholder="Password" required />
          <LockIcon />
        </InputWrapper>
        <ButtonColor text="log in" />
      </Form>
      <ButtonTransparent text="register" />
    </Wrapper>
  )
}

export default LoginForm
