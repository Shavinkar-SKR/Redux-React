function ViewCustomer({ customers }) {
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
