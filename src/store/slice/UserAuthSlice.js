import {createSlice} from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        email: null,
        displayName: null,
        password: null,
        userId: null,
        key: null,
    },
    reducers: {
        setUserAuth(state, action) {
            state.email = action.payload.email
            state.displayName = action.payload.displayName
            state.password = action.payload.password
            state.userId = action.payload.id
            state.key = action.payload.key


        },
        removeUserAuth(state) {
            state.email = null
            state.id = null
            state.displayName = null
            state.password = null
            state.userId = null
            state.key = null
        }
    },

})
export const {setUserAuth, removeUserAuth} = userAuthSlice.actions

export default userAuthSlice.reducer;
