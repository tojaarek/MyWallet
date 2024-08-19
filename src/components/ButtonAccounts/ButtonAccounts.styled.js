import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Button = styled.button`
  background-color: #24cca7;
  border: none;
  border-radius: 0.375rem;
  padding: 0.7rem 0.5rem;
  color: #fff;
  line-height: 0;
  font-size: calc(0.735rem + 0.4vw);
  cursor: pointer;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
