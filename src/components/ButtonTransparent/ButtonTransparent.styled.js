import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  width: 100%;
  height: 3.12rem;
  border-radius: 1.25rem;
  border: 0.063rem solid #4a56e2;
  background-color: transparent;
  color: #4a56e2;
  font-size: 1.12rem;
  line-height: 0;
  font-family: 'Poppins';
  letter-spacing: 0.11rem;
  text-transform: uppercase;
  cursor: pointer;
  @media only screen and ${devices.tablet} {
    max-width: 18.75rem;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const NavLink = styled(Link)`
  width: 100%;
  color: #4a56e2;
  font-size: calc(1.12rem + 0.4vw);
  line-height: 0;
  font-family: 'Poppins';
  letter-spacing: 0.11rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  @media only screen and ${devices.tablet} {
    max-width: 18.75rem;
  }

  @media only screen and ${devices.desktop} {
  }
`;
