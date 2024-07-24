// import {createSlice} from "@reduxjs/toolkit";


// const usersSlice  = createSlice({
//     name: "users",
//     initialState: {
//         users:null
//     },
//     reducers: {
//         setUsers(state, action) {
//             state.users = Object.values(action.payload)

//         },
//     },

// })
// export const {setUsers} = usersSlice.actions

// export default usersSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    authError: null,
    currentUser: null,
  },
  reducers: {
    setUsers(state, action) {
      state.users = Object.values(action.payload);
    },
    authSuccess(state, action) {
      state.authError = null;
      state.currentUser = action.payload;
    },
    authFailure(state, action) {
      state.authError = action.payload;
      state.currentUser = null;
    },
    userNotFound(state, action) {
      state.authError = action.payload;
      state.currentUser = null;
    },
  },
});

export const { setUsers, authSuccess, authFailure, userNotFound } = usersSlice.actions;

export default usersSlice.reducer;
