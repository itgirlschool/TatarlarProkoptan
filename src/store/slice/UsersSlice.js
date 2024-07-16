import {createSlice} from "@reduxjs/toolkit";


const usersSlice  = createSlice({
    name: "users",
    initialState: {
        users:null
    },
    reducers: {
        setUsers(state, action) {
            state.users = Object.values(action.payload)

        },
    },

})
export const {setUsers} = usersSlice.actions

export default usersSlice.reducer;
