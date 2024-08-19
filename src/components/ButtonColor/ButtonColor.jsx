import PropTypes from 'prop-types';
import { Button } from './ButtonColor.styled';

const ButtonColor = ({ click, type, text }) => {
  return (
    <Button type={type} onClick={click}>
      {text}
    </Button>
  );
};

ButtonColor.propTypes = {
  click: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ButtonColor;
