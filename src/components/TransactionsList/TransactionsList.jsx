import { useSelector } from 'react-redux';
import { selectCurrentAccountTransactions } from '../../redux/selectors/currentAccount.selectors';
import { List } from './TransactionList.styled';
import Transaction from '../Transaction/Transaction';

const TransactionsList = () => {
  const transactions = useSelector(selectCurrentAccountTransactions);

  const sortedTransactions = transactions.slice().sort((newest, oldest) => {
    const dateNewest = new Date(newest.date);
    const dateOldest = new Date(oldest.date);
    return dateOldest - dateNewest;
  });

  return (
    <List>
      {sortedTransactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </List>
  );
};

export default TransactionsList;
