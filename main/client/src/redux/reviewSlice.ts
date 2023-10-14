import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { AppDispatch } from "./index";
interface Args {
  id: number;
  input: object;
  loading: boolean;
  error: string;
}
const initialState = {
  data: [],
  error: null,
  loading: false,
};
export const fetchReview = createAsyncThunk("GetReview", async () => {
  const task = await axios.get("http://localhost:3000/api/review/getAllReview");
  return task.data;
});
export const AddReview = createAsyncThunk(
  "AddReview",
  async (input, { dispatch }) => {
   const task = await axios.post("http://localhost:3000/ap/addReview", input);
    dispatch(fetchReview());
return task.data
  }
);
export const UpdateReview = createAsyncThunk(
  "UpdateReview",
  async ({ id, input }: Args, { dispatch }) => {
   const task = await axios.put(
      `http://localhost:3000/api/review/updateReview/${id}`,
      input
    );
    dispatch(fetchReview());
    return task.data
  }
);
export const deleteReview = createAsyncThunk(
  "DeleteReview",
  async (id, { dispatch }) => {
  const task =  await axios.delete(`http://localhost:3000/api/review/deleteReview/${id}`);
    dispatch(fetchReview());
    return task.data

  }
);
const REviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchReview.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(AddReview.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(UpdateReview.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.data = action.payload;
    })
   
  }
});
export default REviewSlice.reducer 
