import { createSlice } from "@reduxjs/toolkit";

const charitySlice = createSlice({
  name: "charity",
  initialState: {
    users: [],
    counter: 0,
  },
  reducers: {
    setUserCharity(state, action) {
      state.users = Object.values(action.payload);
      state.counter = state.users.length;
    },
    addCharityUser(state, action) {
      if (!state.users) {
        state.users = [];
      }
      state.users.push(action.payload);
    },
    setCounter(state) {
      state.counter = state.users.length;
    },
  },
});

export const { setUserCharity, addCharityUser, setCounter } =
  charitySlice.actions;

export default charitySlice.reducer;
