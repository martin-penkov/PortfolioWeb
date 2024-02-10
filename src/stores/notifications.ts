import { nanoid } from 'nanoid';
import { configureStore } from '@reduxjs/toolkit'

const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';

type ActionType = {
    type: typeof ADD_NOTIFICATION | typeof DISMISS_NOTIFICATION,
    payload: Notification
} 

export const addNotification = (notification: Notification) => ({
    type: ADD_NOTIFICATION,
    payload: notification,
} as ActionType);
  
export const dismissNotification = (id: string) => ({
    type: DISMISS_NOTIFICATION,
    payload: id,
});

export type Notification = {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message?: string;
};

// type NotificationsStore = {
//   notifications: Notification[];
//   addNotification: (notification: Omit<Notification, 'id'>) => void;
//   dismissNotification: (id: string) => void;
// };

const initialState = {
    notifications: [],
};
  
const notificationReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
        return {
            ...state,
            notifications: [...state.notifications, { id: nanoid(), ...action.payload }],
        };
        case DISMISS_NOTIFICATION:
        return {
            ...state,
            notifications: state.notifications.filter(notification => notification.id !== action.payload),
        };
        default:
        return state;
    }
};

export const useNotificationStore = () => configureStore({
    notifications: notificationReducer
})