import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = combineReducers({
    product: reducer
})

export const store = configureStore({
    reducer: rootReducer,
})