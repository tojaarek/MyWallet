import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import LogoSvg from '../../assets/shared/logo.svg';
import LockSvg from '../../assets/shared/lock-icon.svg';
import EmailSvg from '../../assets/shared/email-icon.svg';
import UserSvg from '../../assets/shared/user-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media only screen and ${devices.tablet} {
    max-width: 403px;
    border-radius: 1.3rem;
    background: #fff;
    padding: 3rem 4.06rem 3.125rem 4.06rem;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.3rem;

  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
  &:focus-within svg {
    fill: #24cca7;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Input = styled.input`
  padding: 0 0.5rem 0.5rem 3.43rem;
  border: none;
  border-bottom: 0.063rem solid
    ${(props) => (props.$isValid === false ? '#ff6596' : '#cccccc')};
  color: #cccccc;
  font-size: 1.1rem;
  font-family: 'Poppins';
  outline: none;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: color, border;

  &::placeholder {
    color: ${(props) => (props.$isValid === false ? '#ff6596' : '#cccccc')};
    font-family: 'Poppins';
    transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-property: color;
  }

  &:focus::placeholder {
    color: #24cca7;
  }

  &:focus {
    border-bottom: 0.063rem solid #24cca7;
    color: #24cca7;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Logo = styled(LogoSvg)`
  height: 2.18rem;
  margin-bottom: 3.75rem;
  @media only screen and ${devices.tablet} {
    height: 2.5rem;
  }
`;

export const EmailIcon = styled(EmailSvg)`
  height: 1.68rem;
  width: 1.68rem;
  position: absolute;
  top: -1px;
  left: 10px;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: fill;
  fill: ${(props) => (props.$isValid === false ? '#FF6596' : '#cccccc')};
  @media only screen and ${devices.tablet} {
  }
`;

export const LockIcon = styled(LockSvg)`
  height: 1.68rem;
  width: 1.68rem;
  position: absolute;
  top: -1.5px;
  left: 10px;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: fill;
  fill: ${(props) => (props.$isValid === false ? '#ff6596' : '#cccccc')};
  @media only screen and ${devices.tablet} {
  }
`;

export const UserIcon = styled(UserSvg)`
  height: 1.68rem;
  width: 1.68rem;
  position: absolute;
  top: -1.5px;
  left: 10px;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: fill;
  fill: ${(props) => (props.$isValid === false ? '#ff6596' : '#cccccc')};
  @media only screen and ${devices.tablet} {
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #ff6596;
  position: absolute;
  bottom: -18px;
  @media only screen and ${devices.tablet} {
  }
`;

export const Success = styled.p`
  font-size: 1.12rem;
  margin-top: 2rem;
  color: #24cca7;
  text-align: center;
  @media only screen and ${devices.desktop} {
    margin-top: 0;
  }
`;
