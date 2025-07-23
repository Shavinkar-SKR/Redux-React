import { configureStore } from "@reduxjs/toolkit"; //importing configureStore from redux-toolkit.
//This function is used create  a Redux store with good default settings
import customerReducer from "./slices/customerSlice";

export const store = configureStore({
  devTools: true, //enables redux Devtools for debugging in the browser while in development, in production set to false then it hides the state changes for security.
  reducer: {
    customers: customerReducer,
  },
});
