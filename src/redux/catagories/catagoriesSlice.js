import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  reducers: {
    reducer: (state = initialState, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  },
});

export default categoriesSlice.reducer;
