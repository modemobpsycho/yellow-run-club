import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useUserState = () => {
  return useSelector((state: RootState) => state.user);
};

export const useJogState = () => {
  return useSelector((state: RootState) => state.jog);
};
