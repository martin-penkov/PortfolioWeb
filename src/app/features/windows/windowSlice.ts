import { createSlice } from "@reduxjs/toolkit";

export const windowSlice = createSlice({
    name: 'windowManager',
    initialState: {
        currentWindow: 0
    },
    reducers: {
        openWindow: (state, action) => {
            state.currentWindow = action.payload;
        },
        closeWindow: (state) => {
            state.currentWindow = 0;
        }
    }
})

export default windowSlice.reducer;