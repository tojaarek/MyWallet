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
    width: 403px;
    border-radius: 20px;
    background: #fff;
    padding: 40px 65px 50px 65px;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

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
  padding: 8px 8px 8px 55px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  color: #e0e0e0;
  font-size: 18px;
  font-family: 'Circe';
  outline: none;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: color, border;

  &::placeholder {
    color: #e0e0e0;
    font-family: 'Circe';
    transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-property: color;
  }

  &:focus::placeholder {
    color: #24cca7;
  }

  &:focus {
    border-bottom: 1px solid #24cca7;
    color: #24cca7;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Logo = styled(LogoSvg)`
  height: 35px;
  margin-bottom: 60px;
  @media only screen and ${devices.tablet} {
    height: 40px;
  }
`;

export const EmailIcon = styled(EmailSvg)`
  height: 27px;
  width: 27px;
  position: absolute;
  top: 7px;
  left: 10px;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: fill;
  @media only screen and ${devices.tablet} {
  }
`;

export const LockIcon = styled(LockSvg)`
  height: 27px;
  width: 27px;
  position: absolute;
  top: 7px;
  left: 10px;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: fill;
  @media only screen and ${devices.tablet} {
  }
`;

export const UserIcon = styled(UserSvg)`
  height: 27px;
  width: 27px;
  position: absolute;
  top: 7px;
  left: 10px;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: fill;
  @media only screen and ${devices.tablet} {
  }
`;
