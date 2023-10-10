import { doctorApi } from './apiSlice';

export const doctorApiSlice = doctorApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "http://localhost:3000/api/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "http://localhost:3000/api/login",
                method: "POST",
                body: data
            })
        }),
    }),
})


export const { useRegisterMutation, useLoginMutation } = doctorApiSlice 