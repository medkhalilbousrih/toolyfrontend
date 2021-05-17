import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Signin from "./components/Signin/Signin";
import Catalogue from "./components/catalogue/Catalogue";
import SignInSide from "./components/ClientSignup/SignInSide";
import { useState } from "react";
import { RoleContext } from "./contexts/RoleContext";
import Supplier from "./components/thesupplier/Supplier";
import Client from "./components/theclient/client";
import ProductProfile from "./components/ProductPorfile/ProductProfile";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";

const App = () => {
  const [role, setRole] = useState(
    JSON.parse(window.localStorage.getItem("connectedUser"))?.role
  );

  return (
    <RoleContext.Provider value={[role, setRole]}>
      <Router>
        <MainNavbar />
        {role ? (
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/catalogue">
              <Catalogue />
            </Route>
            <Route path="/profile">
              {role === "supplier" ? <Supplier /> : <Client />}
            </Route>
            <Route path="/signup">
              <Redirect to="/Home" />
            </Route>
            <Route path="/login">
              <Redirect to="/Home" />
            </Route>
            <Route path="/product/:id">
              <ProductProfile />
            </Route>
            <Route path="/cart">
              {role === "supplier" ? <Catalogue /> : <Cart />}
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/catalogue">
              <Catalogue />
            </Route>
            <Route path="/signup">
              <SignInSide />
            </Route>
            <Route path="/login">
              <Signin />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Redirect to="/login" />
            </Route>
            <Route path="/product/:id">
              <ProductProfile />
            </Route>
          </Switch>
        )}
        <Footer />
      </Router>
    </RoleContext.Provider>
  );
};

export default App;
