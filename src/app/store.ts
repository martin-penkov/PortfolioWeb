import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { notificationReducer } from './reducers/notificationReducer';

const reducers = combineReducers({
    notifications: notificationReducer
})

export const store = () => configureStore({reducer: reducers})