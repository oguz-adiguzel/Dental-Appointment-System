import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from './features/appointment/appointSlice'

export function createStore(preloadedState = {}) {
    const store = configureStore({
      reducer: {
        appointment: appointmentReducer
      },
      preloadedState,
    });
    return store;
  }
  
  export const store = createStore();