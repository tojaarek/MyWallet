import PropTypes from 'prop-types';
import { Button } from './ButtonTransparent.styled';

const ButtonTransparent = ({ text }) => {
  return <Button>{text}</Button>;
};

ButtonTransparent.propTypes = {
  text: PropTypes.string,
};

export default ButtonTransparent;
