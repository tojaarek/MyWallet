import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import RegisterSvg from '../../assets/RegisterPage/hero-register.svg';
import LoginSvg from '../../assets/LoginPage/hero-login.svg';
import BackgroundPinkSvg from '../../assets/shared/test.png';
import BackgroundPurple from '../../assets/shared/background-purple.png';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ${devices.tablet} {
    align-items: flex-start;
    background-color: #e7eaf2;
    background-image: url(${BackgroundPinkSvg}), url(${BackgroundPurple});
    background-repeat: no-repeat;
    background-position: top right, bottom left;
  }

  @media only screen and ${devices.desktop} {
    background: url(${BackgroundPinkSvg}) top right no-repeat,
      url(${BackgroundPurple}) bottom left no-repeat,
      linear-gradient(
        90deg,
        rgba(231, 234, 242, 1) 43.5%,
        rgba(229, 229, 229, 0.4) 43.5%
      );
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  @media only screen and ${devices.tablet} {
    padding: 3.75rem 0;
  }
  @media only screen and ${devices.desktop} {
    padding: 0;
    max-width: 1280px;
    display: grid;
    grid-template-columns: 550px 730px;
  }
`;

export const ImageWrapper = styled.div`
  display: none;
  @media only screen and ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3.125rem;
  }
  @media only screen and ${devices.desktop} {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const FormWrapper = styled.div`
  @media only screen and ${devices.tablet} {
    display: flex;
    justify-content: center;
    max-width: 1280px;
  }
  @media only screen and ${devices.desktop} {
    width: 100%;
  }
`;

export const HeroRegister = styled(RegisterSvg)`
  @media only screen and ${devices.tablet} {
    width: 260px;
  }

  @media only screen and ${devices.desktop} {
    margin-bottom: 1.75rem;
    width: 435px;
    height: 420px;
  }
`;

export const HeroLogin = styled(LoginSvg)`
  @media only screen and ${devices.tablet} {
    width: 260px;
  }

  @media only screen and ${devices.desktop} {
    margin-bottom: 1.75rem;
    width: 435px;
    height: 420px;
  }
`;

export const Title = styled.h1`
  @media only screen and ${devices.tablet} {
    font-size: 1.87rem;
    font-family: 'Poppins';
    font-weight: 400;
    margin-left: 3.125rem;
  }
  @media only screen and ${devices.desktop} {
    margin-left: 0;
  }
`;
