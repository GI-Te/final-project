import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddCustomer from "./screens/AddCustomer";
import Header from "./components/Header";

import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import Home from "./screens/Home";


function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/register" component={RegisterUserScreen} exact />
          <Route path="/addcustomer" component={AddCustomer} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>  
    </main>
  );
}

export default App;
