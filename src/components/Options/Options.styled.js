import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const List = styled.ul`
  width: fit-content;
  background-color: #ffffff70;
  border-radius: 0.625rem;
  filter: drop-shadow(0 0 0.75rem #00000030);
  position: absolute;
  right: 40px;
  bottom: 75px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Item = styled.li`
  padding: 0.8rem 0.8rem;
  transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: color, background-color;
  &:is(:hover, :focus) {
    background-color: #fff;

    p {
      color: #24cca7;
    }
  }
  &:first-child {
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }

  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Element = styled.p`
  font-size: calc(0.955rem + 0.4vw);
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
