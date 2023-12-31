import axios from "axios";
import {createSlice , createAsyncThunk} from "@reduxjs/toolkit" ; 
const initialState = {
    data : [] , 
    error : null , 
    loading : false  
}

export const fetchAppointments = createAsyncThunk(
    "/api/apointment/getAppointment", 
    async ()=>{
        const task = await axios.get("http://localhost:3000/api/appointment/getAllappointments")
    return task.data
    }
) 
export const addAppointments = createAsyncThunk(
    "AddDoctor",
    async (input:any, { dispatch }) => {
     const task = await axios.post("http://localhost:3000/api/appointment/addAppointment", input);
      dispatch(fetchAppointments());
  return task.data
    }
  );
const appointmentSlice = createSlice({
name:"appointment" , 
initialState,
reducers:{},
extraReducers(builder) {
    builder.addCase(fetchAppointments.fulfilled,(state,action)=>{
        state.data = action.payload
    })

}})

export default appointmentSlice.reducer