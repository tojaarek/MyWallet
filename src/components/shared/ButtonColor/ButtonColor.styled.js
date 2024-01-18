import styled from 'styled-components'
import { devices } from '../../../constants/breakpoints'

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #24cca7;
  background-color: #24cca7;
  color: #fff;
  line-height: 0;
  font-size: 18px;
  font-family: 'Circe';
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  @media only screen and ${devices.tablet} {
    max-width: 300px;
  }

  @media only screen and ${devices.desktop} {
  }
`
