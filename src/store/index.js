import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialURLState = { url: '/search/javascript' };

const urlSlice = createSlice({
  name: 'url',
  initialState: initialURLState,
  reducers: {
    setURL(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.url = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { URL: urlSlice.reducer },
});

export const urlActions = urlSlice.actions;

export default store;
