import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import LoaderSvg from '../../assets/shared/loader.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Icon = styled(LoaderSvg)`
  height: 60px;
  @media only screen and ${devices.desktop} {
    height: 80px;
  }
`;
