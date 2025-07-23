import { createSlice } from "@reduxjs/toolkit"; //createSlice fucntion helps to create a slice of the redux state with reducers and actions
//reducers - functions that determine how the state should change based on an action. Given current state and an action, returns the new state.
//action - plain JavaScript objects that has fields and it value, payload is a field of action

const initialState = []; //initial state of the customers slice

const customerSlice = createSlice({
  name: "customer", //a name for this state
  initialState, //setting the initial state of the customer's array here which is empty
  reducers: {
    addCustomer: (state, action) => {
      //reducer function to handle adding a new customer
      state.push(action.payload);
    },
  },
});

export const { addCustomer } = customerSlice.actions; //exporting the generated action creator so components can dispatch it
export default customerSlice.reducer; //exporting the reducer to be used in the redux store
