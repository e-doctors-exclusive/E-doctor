import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface Args {
  id: number;
  input: object;
}
const initialState = {
  data: [],
  search:[],
  error: null,
  loading: false,
};
type FindDoctorsArg = {
  name?: string;
  MedicalInfo?: string;
};
export const fetchDoctors = createAsyncThunk("GetDoctors", async () => {
  const task = await axios.get("http://localhost:3000/api/doctor/getAllDoctor");
  return task.data;
});
export const findDoctors = createAsyncThunk("findDoctors", async (arg: FindDoctorsArg) => {
  let url = 'http://localhost:3000/api/doctor/find';
  if (arg.name) {
    url += `/${arg.name}`;
  }
  if (arg.MedicalInfo) {
    url += `/info/${arg.MedicalInfo}`;
  }

  const task = await axios.get(url);
  console.log(task.data.data);
  return task.data.data;
});

export const addDoctor = createAsyncThunk(
  "AddDoctor",
  async (input, { dispatch }) => {
    const task = await axios.post(
      "http://localhost:3000/api/doctor/addDoctor",
      input
    );
    dispatch(fetchDoctors());
    return task.data;
  }
);
export const UpdateDoctor = createAsyncThunk(
  "UpdateDoctor",
  async ({ id, input }: Args, { dispatch }) => {
    const task = await axios.put(
      `http://localhost:3000/api/doctor/updateDoctor/${id}`,
      input
    );
    dispatch(fetchDoctors());
    return task.data;
  }
);
export const DeleteDocotr = createAsyncThunk(
  "DeleteDoctor",
  async (id, { dispatch }) => {
    const task = await axios.delete(
      `http://localhost:3000/api/doctor/deleteDoctor/${id}`
    );
    dispatch(fetchDoctors());
    return task.data;
  }
);
const DoctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(findDoctors.fulfilled, (state, action) => {
      state.search = action.payload;
    });
    builder.addCase(addDoctor.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(UpdateDoctor.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(DeleteDocotr.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default DoctorSlice.reducer;
