import styled, { css } from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Container = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 0.8rem 1rem;
  margin-bottom: 2rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Title = styled.p`
  color: #999999;
  font-size: calc(0.735rem + 0.4vw);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Dot = styled.span`
  display: block;
  background-color: #999999;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  margin: 0 0.3rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const BalanceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const BalanceValue = styled.p`
  color: #363636;
  font-size: calc(1.8rem + 0.9vw);
  font-weight: 600;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const BalanceCurrency = styled.p`
  color: #363636;
  font-size: calc(1.8rem + 0.4vw);
  font-weight: 600;
  font-family: Arial, 'Roboto', 'Helvetica Neue', sans-serif;
  margin-left: 0.6rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
