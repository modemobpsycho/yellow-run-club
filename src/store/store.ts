import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/api/base.api';
import { reducer as jogReducer } from './slices/jog.slice';
import { reducer as userReducer } from './slices/user.slice';

const reducers = combineReducers({
   jog: jogReducer,
   user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
