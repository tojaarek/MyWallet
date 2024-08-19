import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import LogoSvg from '../../assets/shared/logo.svg';
import LogoutSvg from '../../assets/shared/logout.svg';

export const Header = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.p`
  color: #999999;
  font-size: 1rem;
  margin-right: 1.25rem;
  @media only screen and ${devices.tablet} {
    margin-right: 0;
  }
`;

export const Logo = styled(LogoSvg)`
  height: 1.875rem;
  @media only screen and ${devices.tablet} {
    height: 2.2rem;
  }
`;

export const Line = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  width: 0.09rem;
  height: 1.6rem;
  background-color: #999999;
  display: none;
  @media only screen and ${devices.tablet} {
    display: inline;
  }
`;
