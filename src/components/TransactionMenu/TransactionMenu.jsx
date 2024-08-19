import { useDispatch } from 'react-redux';
import { Menu, EditIcon, Edit, Delete } from './TransactionMenu.styled';
import {
  setIsModalOpen,
  setModalType,
  setTransactionToDelete,
} from '../../redux/slice/nav.slice';
import PropTypes from 'prop-types';

const TransactionMenu = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    [
      setTransactionToDelete(id),
      setModalType('delete'),
      setIsModalOpen(true),
    ].forEach(dispatch);
  };

  return (
    <Menu>
      <Edit>
        <EditIcon /> Edit
      </Edit>
      <Delete onClick={handleDelete}>Delete</Delete>
    </Menu>
  );
};

TransactionMenu.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TransactionMenu;

///    <Delete onClick={() => dispatch(deleteTransaction(id))}>Delete</Delete>
