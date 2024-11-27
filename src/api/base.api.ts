import { constants } from '@/common/helpers/constants';
import { urls } from '@/common/helpers/urls';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: urls.jogsApi,
    prepareHeaders: (headers) => {
      const token = constants.GET_ACCESS_TOKEN();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),

  tagTypes: ['User', 'Jogs'],
  endpoints: () => ({})
});
