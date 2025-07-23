import { useState } from "react";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux"; //A function that sends (dispatches) an action to the reducer.

function AddCustomer() {
  const [input, setInput] = useState("");
  //   const [customer, setCustomers] = useState([]);
  const dispatch = useDispatch();

  function addCustomer() {
    if (input) {
      //   setCustomers((prevCustomers) => [...prevCustomers, input]);
      dispatch(addCustomerAction(input));
      setInput("");
    }
    console.log(customer);
  }

  return (
    <>
      <h3>Add New Customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addCustomer}>Add</button>
    </>
  );
}

export default AddCustomer;
