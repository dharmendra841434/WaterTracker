import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cupSize: 0,
  addedLog: '',
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCupSize: (state, action) => {
      state.cupSize = action.payload;
    },
  },
});
export const {setCupSize} = appSlice.actions;

export default appSlice.reducer;
