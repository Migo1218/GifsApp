import { configureStore } from '@reduxjs/toolkit'
//REDUCER

import favoritos from "./slices/favoritosSlice"

export const store = configureStore({
  reducer: {
     favoritos
  },
})

