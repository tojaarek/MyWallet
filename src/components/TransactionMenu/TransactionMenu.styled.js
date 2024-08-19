import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import EditSvg from '../../assets/shared/edit-icon.svg';

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const EditIcon = styled(EditSvg)`
  width: 100%;
  stroke: #fff;
  margin-right: 0.5rem;
`;

export const Edit = styled.button`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #fff;
  font-size: calc(0.775rem + 0.4vw);
  border: none;
  background-color: #24cca7;
  border-radius: 0.375rem;
  padding: 0.4rem 0.5rem 0.4rem 0.4rem;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Delete = styled.button`
  font-size: calc(0.775rem + 0.4vw);
  font-weight: 500;
  color: #ff6596;
  border: none;
  background: none;
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
