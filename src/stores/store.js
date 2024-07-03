import {configureStore} from "@reduxjs/toolkit";
import apiReducer from './apiKeySlice.js'

export const store = configureStore({
  reducer: {
    api: apiReducer
  }
})
