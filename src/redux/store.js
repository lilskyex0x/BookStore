import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import catagoriesReducer from './catagories/catagoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: catagoriesReducer,
  },
});

export default store;
