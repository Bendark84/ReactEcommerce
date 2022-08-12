import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      const cart = action.payload;
      return cart;
    },
  },
});

export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`, getConfig())
    .then((res) => dispatch(setCart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

//este es para la funcion del produc detail agregar cosas al carrito

export const addCartThunk = (shoop) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      'https://ecommerce-api-react.herokuapp.com/api/v1/cart',
      shoop,
      getConfig()
    )
    .then(() => dispatch(getCartThunk()))
    .catch((error) => console.log(error.responce))
    .finally(() => dispatch(setIsLoading(false)));
};

//para el boton buy cart
export const buyCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      'https://ecommerce-api-react.herokuapp.com/api/v1/purchases',
      {},
      getConfig()
    )
    .then(() => dispatch(setCart([])))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
