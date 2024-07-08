import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  il_adi: '',
  plaka: '',
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.il_adi = action.payload.il_adi;
      state.plaka = action.payload.plaka;
    }
  }
})

export const {setCity} = citySlice.actions
export default citySlice.reducer
