import {
  Container,
  Button,
  HomeIcon,
  StatsIcon,
  ExchangeIcon,
} from './Nav.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectNavIsHome,
  selectNavIsStatistics,
  selectNavIsExchange,
} from '../../redux/selectors/nav.selectors';
import {
  setHome,
  setStatistics,
  setExchange,
} from '../../redux/slice/nav.slice';

const Nav = () => {
  const dispatch = useDispatch();
  const isHome = useSelector(selectNavIsHome);
  const isStatistics = useSelector(selectNavIsStatistics);
  const isExchange = useSelector(selectNavIsExchange);
  return (
    <Container>
      <Button onClick={() => dispatch(setHome())}>
        <HomeIcon $isActive={isHome} />
      </Button>
      <Button onClick={() => dispatch(setStatistics())}>
        <StatsIcon $isActive={isStatistics} />
      </Button>
      <Button onClick={() => dispatch(setExchange())}>
        <ExchangeIcon $isActive={isExchange} />
      </Button>
    </Container>
  );
};

export default Nav;
