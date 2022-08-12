import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      const favorites = action.payload;
      return favorites;
    },
  },
});

export const getFavoriteThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      'https://ecommerce-api-react.herokuapp.com/api/v1/purchases',
      getConfig()
    )
    .then((res) => dispatch(setFavorites(res.data.data.purchases)))
    .finally(() => dispatch(setIsLoading(false)));
};

//este es para la funcion del produc detail agregar cosas al carrito

// export const addCartThunk = (shoop) => (dispatch) => {
//   dispatch(setIsLoading(true));
//   return axios
//     .post(
//       'https://ecommerce-api-react.herokuapp.com/api/v1/cart',
//       shoop,
//       getConfig()
//     )
//     .then(() => dispatch(getFavoriteThunk()))
//     .finally(() => dispatch(setIsLoading(false)));
// };

export const { setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
