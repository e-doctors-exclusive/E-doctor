import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  error: null,
  loading: false,
};
export const fetchPatients = createAsyncThunk(
  "/api/patient/getAllPatient",
  async () => {
    const task = await axios.get(
      "http://localhost:3000/api/patient/getAllPatient"
    );
    return task.data;
  }
);

export const addPatient = createAsyncThunk(
  "/api/addpatient",
  async (input, dispatch: any) => {
    const task = await axios.post(
      "http://localhost:3000/api/patient/add",
      input
    );
    dispatch(fetchPatients());
    return task.data
  }
);

const PatientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addPatient.fulfilled,(state,action)=>{
        state.data = action.payload
    })
},
});

export default PatientSlice.reducer;
