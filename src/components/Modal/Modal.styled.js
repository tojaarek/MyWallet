import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Background = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
