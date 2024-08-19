import {
  WrapperGrid,
  Title,
  Amount,
  WrapperFlex,
  Date,
  Category,
  Span,
} from './TransactionDetails.styled';
import PropTypes from 'prop-types';
import {
  formatBalance,
  formatCurrency,
  formatDate,
} from '../../constants/helpers';

const TransactionDetails = ({ transaction }) => {
  const { date, type, category, description, value, currency } = transaction;

  const displayedValue = formatBalance(value);
  const displayedCurrency = formatCurrency(currency);
  const displayedDate = formatDate(date);
  const sign = type === 'income' ? '+' : type === 'expense' ? '-' : '';

  return (
    <>
      <WrapperGrid>
        <Title>{description}</Title>
        <Amount>
          {sign}
          {displayedValue}
          <Span> {displayedCurrency}</Span>
        </Amount>
      </WrapperGrid>
      <WrapperFlex>
        <Date>{displayedDate}</Date>
        <Category>{category}</Category>
      </WrapperFlex>
    </>
  );
};

TransactionDetails.propTypes = {
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

export default TransactionDetails;
