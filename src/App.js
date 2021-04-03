import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";
import Supplier from "./components/thesupplier/Supplier";
import Client from "./components/theclient/client";
import Footer from "./components/Footer/Footer";
import PROSignup from "./components/PROSignup/PROSignup";
import ClientSignup from "./components/ClientSignup/ClientSignup";
import Suppliers from "./components/Supplier/Suppliers";
import About from "./components/About/About";
const App = ({}) => {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route path="/PROSignup">
          <PROSignup />
        </Route>
        <Route path="/ClientSignup">
          <ClientSignup />
        </Route>
        <Route path="/supplier">
          <Suppliers />
        </Route>
        <Route path="/thesupplier">
          <Supplier />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
