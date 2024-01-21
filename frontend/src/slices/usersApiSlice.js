import { apiSlice } from "./apiSlice";


const USERS_URL = 'http://localhost:5000';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login: builder.mutation({
            query: (data) =>({
                url: `${USERS_URL}/v1/signIn`,
                method:'POST',
                body:data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/v1/signUp`,
              method: 'POST',
              body: data,
            }),
          }),
        updateUser: builder.mutation({
            query: (data) =>({
               url: `${USERS_URL}/profile`,
               method:'PUT',
               body:data
            })
        }),  
        logout: builder.mutation({
            query: (data) =>({
               url: `${USERS_URL}/logout`,
               method:'DELETE',
               body:data
            })
        })   
    }),

})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserMutation,
  } = userApiSlice;