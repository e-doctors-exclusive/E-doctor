import { configureStore } from '@reduxjs/toolkit'
import patient from './patientSlice'
import doctor from "./doctorSlice"
import review from "./reviewSlice"
import message from './messageSlice'
export const  store = configureStore({
    reducer:{
        review,
        doctor,
        patient,
        message
    }

})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch