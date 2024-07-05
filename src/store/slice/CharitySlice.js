import {createSlice} from "@reduxjs/toolkit";


const charitySlice  = createSlice({
    name: "charity",
    initialState: {
        users:null
    },
    reducers: {
        setUserCharity(state, action) {
            state.users = action.payload

        },
    },

})
export const {setUserCharity} = charitySlice.actions

export default charitySlice.reducer