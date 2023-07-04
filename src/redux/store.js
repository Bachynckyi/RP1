import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import productReducer from './product/product-slice';
import categoryReducer from './category/category-slice';
import subcCategoryReducer from './subcategory/subcategory-slice';
import orderSliceReducer from './order/order-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const ProductPersistConfig = {
  key: 'product',
  storage,
};

const CategoryPersistConfig = {
  key: 'category',
  storage,
};

const SubcategoryPersistConfig = {
  key: 'subcategory',
  storage,
};

const OrderPersistConfig = {
  key: 'order',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    product: persistReducer(ProductPersistConfig, productReducer),
    category: persistReducer(CategoryPersistConfig, categoryReducer),
    subcategory: persistReducer(SubcategoryPersistConfig, subcCategoryReducer),
    order: persistReducer(OrderPersistConfig, orderSliceReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
