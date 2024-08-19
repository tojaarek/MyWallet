import PropTypes from 'prop-types';
import { Button } from './ButtonAccounts.styled';

const ButtonAccounts = ({ text }) => {
  return <Button type="button">{text}</Button>;
};

ButtonAccounts.propTypes = {
  text: PropTypes.string,
};

export default ButtonAccounts;
