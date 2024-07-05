import { createSlice } from "@reduxjs/toolkit";


const autonomySlice = createSlice({
    name: "autonomy",
    initialState: {
        users:null
    },
    reducers: {
        setUserAutonomy(state, action) {
            state.users = Object.values(action.payload)

        },
    },
})
export const {setUserAutonomy} = autonomySlice.actions

export default autonomySlice.reducer;
