import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        allUsers: []
    },
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            };
        },
        setAllUser: (state, action) => {
            return {
                ...state,
                allUsers: action.payload
            };
        },
    }
});

export const { setUser, setAllUser } = userSlice.actions;
export default userSlice.reducer;