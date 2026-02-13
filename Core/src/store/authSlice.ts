import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    addAuthenticationStatus: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { addAuthenticationStatus } = authenticationSlice.actions;
export default authenticationSlice.reducer;
