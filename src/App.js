import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";
import Supplier from "./components/thesupplier/Supplier";
const App = () => {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route path="/supplier">
          <Supplier />
        </Route>
        <Route path="/client"></Route>
      </Switch>
    </Router>
  );
};

export default App;
