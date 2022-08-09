import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './slices/favorites.slice';
import isLoadingSlice from './slices/isLoading.slice';
import productSlice from './slices/product.slice';

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    product: productSlice,
    favorites: favoriteSlice,
  },
});
