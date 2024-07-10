import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  il_adi: sessionStorage.getItem('il_adi') || 'İstanbul',
  plaka: sessionStorage.getItem('plaka') || '34',
  lat: sessionStorage.getItem('lat') || '41.01',
  lon: sessionStorage.getItem('lon') || '28.98',
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action) => {
      if (action.payload) {
        sessionStorage.setItem('il_adi', action.payload.il_adi)
        sessionStorage.setItem('plaka', action.payload.plaka)
        sessionStorage.setItem('lat', action.payload.lat)
        sessionStorage.setItem('lon', action.payload.lon)
      } else {
        sessionStorage.removeItem('il_adi')
        sessionStorage.removeItem('plaka')
        sessionStorage.removeItem('lat')
        sessionStorage.removeItem('lon')
      }
      state.il_adi = action.payload.il_adi;
      state.plaka = action.payload.plaka;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    }
  }
})

export const {setCity} = citySlice.actions
export default citySlice.reducer
