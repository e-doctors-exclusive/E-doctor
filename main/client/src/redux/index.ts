import { configureStore } from '@reduxjs/toolkit'
import patient from './patientSlice'
import doctor from "./doctorSlice"
import review from "./reviewSlice"
export const  store = configureStore({
    reducer:{
        review,
        doctor,
        patient
    }

})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch