import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const {VITE_APP_API_BASE_URL, VITE_APP_API_KEY} = import.meta.env;
export const secApi = createApi({
  reducerPath: 'secApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_API_BASE_URL}/security`,
    prepareHeaders: (headers)=>{
      headers.set('apikey', VITE_APP_API_KEY||'');
    }
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    createuser: builder.mutation({
      query: (create:{email:string,password:string}) => ({
        url: 'signin',
        method: 'POST',
        body: create
      }),
      invalidatesTags: ["Users"]
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'signon',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ["Users"]
    })
  })
});

export const {useCreateuserMutation,useLoginMutation} = secApi;