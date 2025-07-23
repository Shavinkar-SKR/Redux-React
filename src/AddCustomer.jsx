import { useState } from "react";
import ViewCustomer from "./ViewCustomer";

function AddCustomer() {
  const [input, setInput] = useState("");
  const [customer, setCustomers] = useState([]);

  function addCustomer() {
    if (input) {
      setCustomers((prevCustomers) => [...prevCustomers, input]);
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
      <ViewCustomer customers={customer} />
    </>
  );
}

export default AddCustomer;
