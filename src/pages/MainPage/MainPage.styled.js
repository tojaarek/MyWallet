import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Main = styled.main`
  background-color: #e7eaf2;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: 0 16px;
  position: relative;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Section = styled.section`
  width: 100%;
  overflow-y: auto;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
