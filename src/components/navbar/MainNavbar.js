import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MainNavbar = () => {
  const location = useLocation();
  return (
    location.pathname !== "/ClientSignup" && (
      <>
        <Contact>
          <div>Call Tooly: 99 999 999</div>
          <div>
            <i className="fab fa-facebook-square fa-lg"></i>
            <i className="fab fa-twitter-square fa-lg"></i>
            <i className="fab fa-instagram-square fa-lg"></i>
          </div>
          <Link to="/PROSignup">PROFESSIONAL SPACE</Link>
        </Contact>
        <Nav>
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
          <div>
            <Link to="/thesupplier">Supplier</Link>
            <Link to="/client">client</Link>
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/ClientSignup">Sign Up</Link>
          </div>
        </Nav>
        <Sep></Sep>
      </>
    )
  );
};

const Contact = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-weight: initial;
  justify-content: space-between;
  background-color: #353535;
  height: 2rem;
  div {
    margin: 0 1rem;
    margin-top: 5px;
    color: white;
    i {
      margin: 0 1rem;
    }
  }
`;
const Nav = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  div {
    margin-top: 0.5rem;
    margin-left: 2rem;
    height: 4rem;
    img {
      max-height: 80%;
      margin-top: 0 rem;
    }
  }
`;
const Sep = styled.div`
  height: 0.01rem;
  background-color: rgb(235, 235, 235);
  box-shadow: 0px 1px 5px grey;
`;

export default MainNavbar;
