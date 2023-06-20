import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import productReducer from './product/product-slice';
import categoryReducer from './category/category-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const ProductPersistConfig = {
  key: 'product',
  storage,
};

const CategoryPersistConfig = {
  key: 'product',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    product: persistReducer(ProductPersistConfig, productReducer),
    category: persistReducer(CategoryPersistConfig, categoryReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
