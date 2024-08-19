import { Item } from './Transaction.styled';
import PropTypes from 'prop-types';

import TransactionMenu from '../TransactionMenu/TransactionMenu';
import TransactionDetails from '../TransactionDetails/TransactionDetails';

const Transaction = ({ transaction }) => {
  const { id, type } = transaction;

  return (
    <Item $type={type}>
      <TransactionDetails transaction={transaction} />
      <TransactionMenu id={id} />
    </Item>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default Transaction;
