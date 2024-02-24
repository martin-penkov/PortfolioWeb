import { Apps } from "@/app/consts/Apps";
import { createSlice } from "@reduxjs/toolkit";

export type WindowState = {
    currentWindow: Apps
}

const initialState: WindowState = {
    currentWindow: Apps.None
}

export const windowSlice = createSlice({
    name: 'windowManager',
    initialState,
    reducers: {
        openWindow: (state: WindowState, action) => {
            state.currentWindow = action.payload;
        },
        closeWindow: (state: WindowState) => {
            state.currentWindow = Apps.None;
        }
    }
})

export const { openWindow, closeWindow } = windowSlice.actions;

export default windowSlice.reducer;