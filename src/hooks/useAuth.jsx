import { useSelector } from 'react-redux';
import {
  selectUsersIsLoggedIn,
  selectUsersIsRefreshing,
  selectUsersEmail,
} from '../redux/selectors/users.selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectUsersIsLoggedIn);
  const isRefreshing = useSelector(selectUsersIsRefreshing);
  const email = useSelector(selectUsersEmail);

  return {
    isLoggedIn,
    isRefreshing,
    email,
  };
};
