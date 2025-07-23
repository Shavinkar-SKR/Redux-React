import { configureStore } from "@reduxjs/toolkit"; //importing configureStore from redux-toolkit.
//This function is used create  a Redux store with good default settings

export const store = configureStore({
  devTools: true, //enables redux Devtools for debugging in the browser
  reducer: {
    customers,
  },
});
