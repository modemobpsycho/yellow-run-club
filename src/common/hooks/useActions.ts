import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions as userActions } from '@/store/slices/user.slice';
import { actions as jogActions } from '@/store/slices/jog.slice';

const rootActions = {
  ...userActions,
  ...jogActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
