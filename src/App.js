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
import { useState, useEffect } from "react";
import { RoleContext } from "./contexts/RoleContext";
import Supplier from "./components/thesupplier/Supplier";
import Client from "./components/theclient/client";
import ProductCard from "./components/ProductPorfile/ProductCard";
import ProductProfile from "./components/ProductPorfile/ProductProfile";

const App = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const connectedUser = window.localStorage.getItem("connectedUser");
    if (connectedUser) {
      const user = JSON.parse(connectedUser);
      setRole(user.role);
    }
  }, []);

  return (
    <RoleContext.Provider value={[role, setRole]}>
      <Router>
        <MainNavbar />
        {role ? (
          <Switch>
            <Route exact path="/">
              <Redirect to="/catalogue" />
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
              <Redirect to="/catalogue" />
            </Route>
            <Route path="/login">
              <Redirect to="/catalogue" />
            </Route>
            <Route path="/product/:id">
              <ProductProfile />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/">
              <Redirect to="/catalogue" />
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
