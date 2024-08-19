import ButtonLogout from '../ButtonLogout/ButtonLogout';
import {
  Header,
  Logo,
  UserBox,
  UserName,
  Line,
  Container,
} from './AppBar.styled';
import { selectUsersName } from '../../redux/selectors/users.selectors';
import { useSelector } from 'react-redux';
const AppBar = () => {
  const userName = useSelector(selectUsersName);
  return (
    <Header>
      <Container>
        <Logo />
        <UserBox>
          <UserName>{userName}</UserName>
          <Line />
          <ButtonLogout />
        </UserBox>
      </Container>
    </Header>
  );
};

export default AppBar;
