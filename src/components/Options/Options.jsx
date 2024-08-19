import { List, Item, Element } from './Options.styled';
import { selectUserAccounts } from '../../redux/selectors/userAccounts.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setIsOptionsOpen } from '../../redux/slice/nav.slice';

const Options = ({ buttonRef }) => {
  const dispatch = useDispatch();
  const accounts = useSelector(selectUserAccounts);
  const listRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      listRef.current &&
      !listRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      dispatch(setIsOptionsOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <List ref={listRef}>
      <Item>
        <Element>Add transaction</Element>
      </Item>
      <Item>
        <Element>Money transfer</Element>
      </Item>
      {accounts.length > 1 && (
        <Item>
          <Element>Currency exchange</Element>
        </Item>
      )}
    </List>
  );
};

export default Options;
