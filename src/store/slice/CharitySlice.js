import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharityAllUsers, addUserCharity } from '../../Services/CharityFB/charityFB';

export const fetchCharityUsers = createAsyncThunk(
    'charity/fetchCharityUsers',
    async () => {
        const response = await getCharityAllUsers();
        if (!Array.isArray(response)) {
            throw new Error('Не правильный формат данных')
        };
        return response
    }
);

export const addCharityUser = createAsyncThunk(
    'charity/addCharityUser',
    async (userData) => {
        const response = await addUserCharity(userData);
        return response;
    }
);

const charitySlice = createSlice({
    name: 'charity',
    initialState: {
        users: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharityUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCharityUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchCharityUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default charitySlice.reducer;