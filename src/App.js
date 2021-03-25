import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";
import Supplier from "./components/thesupplier/Supplier";
import Client from "./components/theclient/client";
const App = () => {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route path="/supplier">
          <Supplier />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
