import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import WarningSvg from '../../assets/shared/warning-icon.svg';

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding: 0 16px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Title = styled.p`
  font-size: calc(1.5rem + 0.4vw);
  margin-bottom: 1rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Text = styled.p`
  font-size: calc(1.1rem + 0.4vw);
  text-align: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Buttons = styled.div`
  width: 100%;

  & > :first-child {
    margin-bottom: 1.3rem;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.3rem;
  width: 5.3rem;
  border: 0.2rem solid #ff6596;
  border-radius: 50%;
  margin-bottom: 3rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const WarningIcon = styled(WarningSvg)`
  height: 2.8rem;
  width: 2.8rem;
  @media only screen and ${devices.tablet} {
  }
`;
