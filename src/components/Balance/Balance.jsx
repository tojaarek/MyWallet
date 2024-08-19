import {
  Container,
  Title,
  BalanceBox,
  BalanceValue,
  BalanceCurrency,
  Dot,
  TopBox,
} from './Balance.styled';
import { useSelector } from 'react-redux';
import {
  selectCurrentAccountBalance,
  selectCurrentAccountCurrency,
} from '../../redux/selectors/currentAccount.selectors';
import { selectUserAccounts } from '../../redux/selectors/userAccounts.selectors';
import { formatBalance, formatCurrency } from '../../constants/helpers';
import ButtonAccounts from '../ButtonAccounts/ButtonAccounts';

const Balance = () => {
  const balance = useSelector(selectCurrentAccountBalance);
  const dispayedBalance = formatBalance(balance);
  const currency = useSelector(selectCurrentAccountCurrency);
  const displayedCurrency = formatCurrency(currency);
  const userAccounts = useSelector(selectUserAccounts);
  const buttonText =
    userAccounts.length === 1 ? '+ New Account' : 'All Accounts';

  return (
    <Container>
      <TopBox>
        <Title>
          Balance <Dot /> {currency}
        </Title>
        <ButtonAccounts text={buttonText} />
      </TopBox>
      <BalanceBox>
        <BalanceValue>{dispayedBalance}</BalanceValue>
        <BalanceCurrency>{displayedCurrency}</BalanceCurrency>
      </BalanceBox>
    </Container>
  );
};

export default Balance;
