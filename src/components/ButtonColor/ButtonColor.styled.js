import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Button = styled.button`
  width: 100%;
  height: 3.12rem;
  border-radius: 1.25rem;
  border: 0.063rem solid #24cca7;
  background-color: #24cca7;
  color: #fff;
  line-height: 0;
  font-size: calc(1.12rem + 0.4vw);
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
