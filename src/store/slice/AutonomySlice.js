import {createSlice} from "@reduxjs/toolkit";


const autonomySlice = createSlice({
    name: "autonomy",
    initialState: {
        users: []
    },
    reducers: {
        setUserAutonomy(state, action) {
            state.users = action.payload.users

        },
    },

})
export const {setUserAutonomy} = autonomySlice.actions

export default autonomySlice.reducer
