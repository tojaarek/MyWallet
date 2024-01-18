import {
  Container,
  FormWrapper,
  ImageWrapper,
  HeroRegister,
  Section,
  Title,
} from '../AuthPages/AuthPages.styled';
import { Helmet } from 'react-helmet';
import RegisterForm from '../../components/AuthForms/RegisterForm';

const RegisterPage = () => (
  <>
    <Helmet>
      <title>MyWallet - FinanceApp | Create account</title>
    </Helmet>
    <Section>
      <Container>
        <ImageWrapper>
          <HeroRegister />
          <Title>Finance App</Title>
        </ImageWrapper>
        <FormWrapper>
          <RegisterForm />
        </FormWrapper>
      </Container>
    </Section>
  </>
);

export default RegisterPage;
