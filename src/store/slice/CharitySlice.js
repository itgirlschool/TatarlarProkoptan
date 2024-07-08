import { createSlice } from "@reduxjs/toolkit";

const charitySlice = createSlice({
    name: "charity",
    initialState: {
        users: null,
        counter: 0
    },
    reducers: {
        setUserCharity(state, action) {
            state.users = Object.values(action.payload);
        },
        addCharityUser(state, action) {
            state.users.push(action.payload);
        },
        setCounter(state, action) {
            state.counter = action.payload;
        },
        updateCounter(state) {
            state.counter += 1;
        }
    },

})
export const { setUserCharity, addCharityUser, setCounter, updateCounter } = charitySlice.actions

export default charitySlice.reducer
