import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
