import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import ForeCastReducer from "./slices/forecast/index";

export const store = configureStore({
  reducer: {
    foreCast: ForeCastReducer,
  },
  middleware: [thunkMiddleware],

});
