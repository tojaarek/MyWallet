import { Background } from './Modal.styled';
import {
  selectNavIsLoading,
  selectNavModalType,
} from '../../redux/selectors/nav.selectors';
import { useSelector } from 'react-redux';
import ModalContentDelete from '../ModalContentDelete/ModalContentDelete';
import Loader from '../Loader/Loader';

const Modal = () => {
  const isLoading = useSelector(selectNavIsLoading);
  const modalType = useSelector(selectNavModalType);
  let ModalContent = null;

  if (isLoading) {
    ModalContent = <Loader />;
  } else if (modalType === 'delete') {
    ModalContent = <ModalContentDelete />;
  }

  return <Background>{ModalContent}</Background>;
};

export default Modal;
