import AddCustomer from "./AddCustomer";
import ViewCustomer from "./ViewCustomer";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>React - Redux</h1>
      <AddCustomer />
    </Provider>
  );
}

export default App;
