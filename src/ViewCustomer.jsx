import { useSelector } from "react-redux"; //useSelector allows to access data from the Redux store
import { deleteCustomer as deleteCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

function ViewCustomer() {
  const customers = useSelector((state) => state.customers); //state is the entire Redux state.
  //state.customers gives you the customers slice
  const dispatch = useDispatch();

  function deleteCustomer(index) {
    dispatch(deleteCustomerAction(index));
  }

  return (
    <>
      <h3>Customers List</h3>
      <ul>
        {customers.map((cust, index) => (
          <li>
            {cust} <button onClick={() => deleteCustomer(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ViewCustomer;
