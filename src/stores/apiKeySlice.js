import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  api: sessionStorage.getItem('api') || false
}

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApi: (state, action) => {
      if (action.payload) {
        sessionStorage.setItem('api', action.payload)
      } else {
        sessionStorage.removeItem('api')
      }
      state.api = action.payload;
    }
  }
})

export const {setApi} = apiSlice.actions;
export default apiSlice.reducer;
