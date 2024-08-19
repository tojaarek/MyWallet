import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const Item = styled.li`
  max-width: 300px;
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  color: #363636;
  border-left: ${(props) =>
    props.$type === 'expense'
      ? 'solid 0.45rem #FF6596'
      : 'solid 0.45rem #24cca7'};
  border-radius: 0.625rem;
  padding: 0.8rem 1rem 0.8rem 0.485rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 20px;
  }
  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;
