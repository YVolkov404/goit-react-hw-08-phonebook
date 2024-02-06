import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsUserLoggedIn,
  selectIsAccessRefreshing,
} from '../rdx/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsUserLoggedIn);
  const isRefreshing = useSelector(selectIsAccessRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
