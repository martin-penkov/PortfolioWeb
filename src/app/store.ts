import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './features/notifications/notificationSlice';
import windowsReducer from './features/windows/windowSlice'

export const store = configureStore({
    reducer: {
        notificationsState: notificationReducer,
        windows: windowsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch