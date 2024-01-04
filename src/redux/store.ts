import { configureStore, } from '@reduxjs/toolkit'
import cvReducer from './allCvState'

// Create your Redux store
export const store = configureStore({
  reducer: {
    cvReducer
    // Add other reducers if you have more
  },
});

// Subscribe to store changes and save to local storage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));
});