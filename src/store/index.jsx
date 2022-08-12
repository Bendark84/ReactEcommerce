import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.slice';
import favoriteSlice from './slices/favorites.slice';
import isLoadingSlice from './slices/isLoading.slice';
import productSlice from './slices/product.slice';

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    product: productSlice,
    favorites: favoriteSlice,
    cart: cartSlice,
  },
});
