import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loader: false
    },
    reducers: {
        showLoader: (state) => {
            return {
                ...state,
                loader: true,
            }
        },
        hideLoader: (state) => {
            return {
                ...state,
                loader: false,
            }
        }
    }
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;