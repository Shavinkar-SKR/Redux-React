import { useSelector } from "react-redux"; //useSelector allows to access data from the Redux store

function ViewCustomer() {
  const customers = useSelector((state) => state.customers); //state is the entire Redux state.
  //state.customers gives you the customers slice
  return (
    <>
      <h3>Customers List</h3>
      <ul>
        {customers.map((cust) => (
          <li>{cust}</li>
        ))}
      </ul>
    </>
  );
}

export default ViewCustomer;
