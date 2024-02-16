import { nanoid } from "nanoid";

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
    // id: string;
    type: 'info' | 'warning' | 'success' | 'error';
    title: string;
    message?: string;
};

export const notificationReducer = (state: Notification[] = [], action: ActionType) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return [...state, { id: nanoid(), ...action.payload }];
        case DISMISS_NOTIFICATION:
            return state.filter(notification => notification.id !== action.payload.id);
        default:
            return state;
    }
};
