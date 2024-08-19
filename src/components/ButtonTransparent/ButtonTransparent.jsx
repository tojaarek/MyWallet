import PropTypes from 'prop-types';
import { Button, NavLink } from './ButtonTransparent.styled';

const ButtonTransparent = ({ click, isLink, to, type, text }) => {
  return isLink ? (
    <NavLink to={to}>
      <Button type={type}>{text}</Button>
    </NavLink>
  ) : (
    <Button type={type} onClick={click}>
      {text}
    </Button>
  );
};

ButtonTransparent.propTypes = {
  click: PropTypes.func,
  isLink: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ButtonTransparent.defaultProps = {
  isLink: false,
};

export default ButtonTransparent;
