import { createSlice, nanoid } from "@reduxjs/toolkit";

export type NotificationState = {
    notifications: Notification[]
}

type Notification = {
    id: string;
    type: 'info' | 'warning' | 'success' | 'error';
    title: string;
    message?: string;
};

const initialState: NotificationState = {
    notifications: []
}

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state: NotificationState, action) => {
            state.notifications.push({ id: nanoid(), ...action.payload });
        },
        dismissNotification: (state: NotificationState, action) => {
            state.notifications = state.notifications.filter(notification => notification.id !== action.payload.id);
        }
    }
})

export const { addNotification, dismissNotification } = notificationSlice.actions;

export default notificationSlice.reducer;