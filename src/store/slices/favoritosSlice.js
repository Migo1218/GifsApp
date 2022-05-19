import { createSlice } from "@reduxjs/toolkit";

export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState: {
    favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
  },
  reducers: {
    setFav: (state, action) => {
      console.log(action.payload)
      // Hasta este punto llega bien el objeto 
      const nuevosFavoritos = [...state.favoritos, action.payload];
      // console.log(nuevosFavoritos)

      localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
      state.favoritos = nuevosFavoritos;
    },
    deleteItemFav: (state, action) => {
      const nuevosFavoritosDelete = [...action.payload];
      localStorage.setItem(
        "favoritos",
        JSON.stringify(nuevosFavoritosDelete)
      );
      state.favoritos = nuevosFavoritosDelete;
    },
  },
});

export default favoritosSlice.reducer;
export const { setFav } = favoritosSlice.actions;
export const { deleteItemFav } = favoritosSlice.actions;

// export const buy = (productocarrito) => {
//   return (dispatch) => {
//     dispatch(
//       setCarrito(
//         productocarrito
//       )
//     );
// };
// };
