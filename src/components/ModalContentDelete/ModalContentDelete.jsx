import { useDispatch, useSelector } from 'react-redux';
import ButtonColor from '../ButtonColor/ButtonColor';
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent';
import {
  Buttons,
  ContentBox,
  Title,
  Text,
  IconBox,
  InfoBox,
  WarningIcon,
} from './ModalContentDelete.styled';
import { selectNavTransactionToDelete } from '../../redux/selectors/nav.selectors';
import {
  setModalType,
  setIsModalOpen,
  setTransactionToDelete,
} from '../../redux/slice/nav.slice';
import { deleteTransaction } from '../../redux/actions/currentAccount.actions';

const ModalContentDelete = () => {
  const dispatch = useDispatch();
  const transactionId = useSelector(selectNavTransactionToDelete);

  const handleDelete = () => {
    dispatch(deleteTransaction(transactionId));
  };

  const handleCancel = () => {
    [
      setTransactionToDelete(null),
      setModalType(''),
      setIsModalOpen(false),
    ].forEach(dispatch);
  };

  return (
    <ContentBox>
      <InfoBox>
        <IconBox>
          <WarningIcon />
        </IconBox>
        <Title>Are you sure?</Title>
        <Text>This process cannot be undone</Text>
      </InfoBox>
      <Buttons>
        <ButtonColor type="button" text="delete" click={handleDelete} />
        <ButtonTransparent type="button" text="cancel" click={handleCancel} />
      </Buttons>
    </ContentBox>
  );
};

export default ModalContentDelete;
