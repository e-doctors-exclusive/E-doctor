import { configureStore } from '@reduxjs/toolkit'

import patient from './patientSlice'
import doctor from "./doctorSlice"


export const  store = configureStore({
    reducer:{
        doctor,
        patient
    }

})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch