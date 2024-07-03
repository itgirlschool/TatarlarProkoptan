import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAutonomyAllUsers } from "../../Services/AutonomyFB/autonomy";

export const fetchUsersAutonomy = createAsyncThunk(
  "autonomy/fetchAutonomy",
  async () => {
    const response = await getAutonomyAllUsers();
    return response;
  }
);

const autonomySlice = createSlice({
  name: "autonomy",
  initialState: {
    users: null,
  },
  reducers: {
    setUserAutonomy(state, action) {
      state.users = action.payload.users;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAutonomy.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export const { setUserAutonomy } = autonomySlice.actions;

export default autonomySlice.reducer;
