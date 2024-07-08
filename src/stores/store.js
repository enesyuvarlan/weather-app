import {configureStore} from "@reduxjs/toolkit";
import apiReducer from './apiKeySlice.js'
import cityReducer from './citySlice.js'

export const store = configureStore({
  reducer: {
    api: apiReducer,
    city: cityReducer
  }
})
