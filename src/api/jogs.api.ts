import { baseApi } from './base.api';
import { ICreateJog, IJog, IUpdateJog } from '@/common/types/jog.interface';

export const collectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJogs: builder.query<{ jogs: IJog[] | undefined }, void>({
      query: () => ({
        url: `/jogs`,
        method: 'GET'
      }),
      providesTags: () => ['Jogs']
    }),
    getJog: builder.query<IJog, number>({
      query: (id: number) => ({
        url: `/jogs/${id}`,
        method: 'GET'
      }),
      providesTags: () => ['Jogs']
    }),
    addJog: builder.mutation<IJog, ICreateJog>({
      query: (jog: ICreateJog) => ({
        body: jog,
        url: `/jogs`,
        method: 'POST'
      }),
      invalidatesTags: () => ['Jogs']
    }),
    updateJog: builder.mutation<IJog, IUpdateJog>({
      query: (jog: IUpdateJog) => ({
        body: jog,
        url: `/jogs/${jog.id}`,
        method: 'PATCH'
      }),
      invalidatesTags: () => ['Jogs']
    }),
    deleteJog: builder.mutation<IJog, number>({
      query: (id: number) => ({
        url: `/jogs/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: () => ['Jogs']
    })
  })
});

export const { useGetJogsQuery, useGetJogQuery, useAddJogMutation, useUpdateJogMutation, useDeleteJogMutation } =
  collectionApi;
