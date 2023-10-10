import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorApi = createApi({
    reducerPath: 'doctorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
        
    }),
})