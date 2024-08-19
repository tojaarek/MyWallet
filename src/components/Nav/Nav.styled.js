import styled, { css } from 'styled-components';
import { devices } from '../../constants/breakpoints';
import HomeSvg from '../../assets/Nav/home-icon.svg';
import StatsSvg from '../../assets/Nav/stats-icon.svg';
import ExchangeSvg from '../../assets/Nav/exchange-icon.svg';

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 1.5rem 0 2rem 0;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

const iconStyles = css`
  background-color: #fff;
  border-radius: 8px;
  height: 2.5rem;
  width: 2.5rem;
  fill: ${(props) => (props.$isActive === true ? '#4A56E2' : '#6E78E8')};
  filter: ${(props) =>
    props.$isActive === true
      ? 'drop-shadow(0 0 0.75rem #4A56E2)'
      : 'drop-shadow(0 0 0)'};
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: fill, filter;
`;

export const HomeIcon = styled(HomeSvg)`
  ${iconStyles}
`;

export const StatsIcon = styled(StatsSvg)`
  ${iconStyles}
`;

export const ExchangeIcon = styled(ExchangeSvg)`
  ${iconStyles}
`;
