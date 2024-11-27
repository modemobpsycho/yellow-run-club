
import { IUser, IUserLoginInfo, IUserRegisterInfo } from '@/common/types/user.interface';
import { baseApi } from './base.api';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<string, IUserLoginInfo>({
      query: (userInfo: IUserLoginInfo) => ({
        body: userInfo,
        url: '/auth/signin',
        method: 'POST'
      }),
      invalidatesTags: () => []
    }),
    signupUser: builder.mutation<IUser, IUserRegisterInfo>({
      query: (userInfo: IUserRegisterInfo) => ({
        body: userInfo,
        url: '/auth/signup',
        method: 'POST'
      })
    }),
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: '/user/me',
        method: 'GET'
      }),
      providesTags: ['User']
    }),
  })
});

export const {
  useLoginUserMutation,
  useSignupUserMutation,
  useGetUserQuery,
} = userApi;
