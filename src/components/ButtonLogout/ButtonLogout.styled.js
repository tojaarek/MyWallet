import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import LogoutSvg from '../../assets/shared/logout.svg';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: #999999;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
`;

export const LogoutIcon = styled(LogoutSvg)`
  width: 1.525rem;
  fill: #999999;
  @media only screen and ${devices.tablet} {
    margin-right: 0.2rem;
  }
`;
