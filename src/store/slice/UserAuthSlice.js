import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    email: null,
    displayName: null,
    password: null,
    phone: null,
    date: null,
    statusUser: null,
    id: null,
    key: null,
  },
  reducers: {
    setUserAuth(state, action) {
      state.email = action.payload.email;
      state.displayName = action.payload.displayName || null;
      state.password = action.payload.password;
      state.phone = action.payload.phone || null;
      state.date = action.payload.date || null;
      state.statusUser = action.payload.statusUser || null;
      state.id = action.payload.id;
      state.key = action.payload.key || null;
    },
    removeUserAuth(state) {
      state.email = null;
      state.id = null;
      state.displayName = null;
      state.password = null;
      state.phone = null;
      state.date = null;
      state.statusUser = null;
      state.id = null;
      state.key = null;
    },
  },
});
export const { setUserAuth, removeUserAuth } = userAuthSlice.actions;

export default userAuthSlice.reducer;
