import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Button = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  background-color: #24cca7;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.35rem #24cca7);
  position: absolute;
  bottom: 16px;
  right: 16px;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Dot = styled.span`
  width: 0.3rem;
  height: 0.3rem;
  background-color: #fff;
  border-radius: 50%;
  color: #fff;
  display: block;

  &:nth-child(1),
  &:nth-child(2) {
    margin-right: 0.3rem;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
