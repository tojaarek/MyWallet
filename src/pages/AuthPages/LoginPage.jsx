import {
  Container,
  FormWrapper,
  ImageWrapper,
  HeroLogin,
  Section,
  Title,
} from '../AuthPages/AuthPages.styled';
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/AuthForms/LoginForm';

const LoginPage = () => (
  <>
    <Helmet>
      <title>MyWallet - FinanceApp | Sign in</title>
    </Helmet>
    <Section>
      <Container>
        <ImageWrapper>
          <HeroLogin />
          <Title>Finance App</Title>
        </ImageWrapper>
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </Container>
    </Section>
  </>
);

export default LoginPage;
