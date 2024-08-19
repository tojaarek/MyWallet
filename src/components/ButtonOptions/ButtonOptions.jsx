import { useDispatch, useSelector } from 'react-redux';
import { Button, Dot } from './ButtonOptions.styled';
import { setIsOptionsOpen } from '../../redux/slice/nav.slice';
import { selectNavIsOptionsOpen } from '../../redux/selectors/nav.selectors';
import { useRef } from 'react';

const ButtonOptions = ({ buttonRef }) => {
  const dispatch = useDispatch();
  const isOptionsOpen = useSelector(selectNavIsOptionsOpen);

  return (
    <Button
      type="button"
      ref={buttonRef}
      onClick={() => dispatch(setIsOptionsOpen(!isOptionsOpen))}
    >
      <Dot />
      <Dot />
      <Dot />
    </Button>
  );
};

export default ButtonOptions;
