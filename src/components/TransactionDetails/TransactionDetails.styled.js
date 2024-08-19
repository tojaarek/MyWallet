import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Title = styled.p`
  font-size: calc(0.775rem + 0.4vw);
  font-weight: 500;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Amount = styled.p`
  font-size: calc(0.775rem + 0.4vw);
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Span = styled.span`
  font-size: calc(0.775rem + 0.4vw);
  font-family: Arial, 'Roboto', 'Helvetica Neue', sans-serif;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Date = styled.p`
  font-size: calc(0.725rem + 0.4vw);
  color: #999999;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Category = styled.p`
  font-size: calc(0.725rem + 0.4vw);
  color: #999999;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
