import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(0, 0, 1),
    height: "20px",
    width: "80px",
    color: "black",

    backgroundColor: "#ffc800",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  submit2: {
    margin: theme.spacing(0, 0, 1),
    height: "20px",
    width: "90px",
    color: "white",
    borderColor: "white",

    "&:hover": {
      backgroundColor: "#ffc800",
      color: "black",
    },
  },
}));

const MainNavbar = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    location.pathname !== "/Signup" &&
    location.pathname !== "/SignIn" && (
      <>
        <Contact>
          <div>Call Tooly: 99 999 999</div>
          <div>
            <i className="fab fa-facebook-square fa-lg"></i>
            <i className="fab fa-twitter-square fa-lg"></i>
            <i className="fab fa-instagram-square fa-lg"></i>
          </div>
          <div className="logbuttons">
            <Link to="/Signup" className="ccwhiteee">
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit2}
              >
                Sign Up
              </Button>
            </Link>
            &nbsp;&nbsp;
            <Link to="/SignIn" className="ccblacc">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </Link>
          </div>
        </Contact>
        <Nav>
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
          <div>
            <Link to="/thesupplier">Home</Link>
            &nbsp;&nbsp;
            <Link to="/catalogue">Catalogue</Link>
            &nbsp;&nbsp;
            <Link to="/about">Contat-Us</Link>
            &nbsp;&nbsp;
            <Link to="/about">F.A.Q ?</Link>
          </div>
          <div>
            <i class="fas fa-cart-arrow-down"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/client">
              <i class="fas fa-user-plus"></i>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/thesupplier">
              <i class="fas fa-user-astronaut"></i>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
  align-items: baseline;
  font-family: "Open Sans", sans-serif;
  div {
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 3rem;
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
