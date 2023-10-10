import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  // Define your user properties here
}

interface DoctorSliceState {
  user: User | null;
  userToken: string | null;
  loggedIn: boolean;
}

const initialState: DoctorSliceState = {
  user: localStorage.getItem('userInfo'),
  userToken: localStorage.getItem('userToken'),
  loggedIn: !!localStorage.getItem('userToken'),
};

export const doctorSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<{ token: string; loggedIn: boolean }>) => {
      const { token, loggedIn } = action.payload;
      localStorage.setItem('userToken', JSON.stringify(token));
      state.userToken = token;
      state.loggedIn = loggedIn;
    },
    setDoctor: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('userToken');
    },
  },
});

export const { setDoctor, logout, setLoggedIn } = doctorSlice.actions;
export default doctorSlice.reducer;
