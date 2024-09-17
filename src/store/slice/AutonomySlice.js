import { createSlice } from "@reduxjs/toolkit";
import { date } from "yup";

const autonomySlice = createSlice({
    name: "autonomy",
    initialState: {
        users: [],
    },
    reducers: {
        setUserAutonomy(state, action) {
            state.users = Object.values(action.payload);
        },
        sortUserAutonomy(state, action) {
            if (action.payload === "Ранее") {
                state.users = state.users.sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
            } else if (action.payload === "Недавно") {
                state.users = state.users.sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                );
            }
        },
    },
});
export const { setUserAutonomy, sortUserAutonomy } = autonomySlice.actions;

export default autonomySlice.reducer;
