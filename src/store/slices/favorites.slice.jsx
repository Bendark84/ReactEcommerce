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
    .then((red) => dispatch(setFavorites(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
