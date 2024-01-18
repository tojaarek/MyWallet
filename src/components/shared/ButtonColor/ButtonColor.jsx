import PropTypes from 'prop-types';
import { Button } from './ButtonColor.styled'

const ButtonColor = ( {text} ) => {
  return <Button>{text}</Button>
}

ButtonColor.propTypes = {
    text: PropTypes.string,
};

export default ButtonColor