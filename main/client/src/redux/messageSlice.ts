import axios from "axios";
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    data : [],
    error: null,
    loading:false
}

export const fetchMessages = createAsyncThunk(
    "/api/message/getAllMessages",
    async()=>{
        const message = await axios.get(
            'http://localhost:3000/api/message/getAllMessages'
            )
            return message.data
    }
)

export const addMessage = createAsyncThunk("/api/message/addMessage",
async(input:any,{dispatch})=>{
    const addMessage = await axios.post("http://localhost:3000/api/message/addMessage",
    input
    )
    dispatch(fetchMessages())
    return addMessage.data
})

const MessageSlice = createSlice({
    name:"message",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchMessages.fulfilled,(state,action)=>{
            state.data=action.payload
        })
        builder.addCase(addMessage.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})

export default MessageSlice.reducer