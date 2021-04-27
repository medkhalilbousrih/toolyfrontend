import { Link, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { RoleContext } from "../../contexts/RoleContext";

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
  const [role, setRole] = useContext(RoleContext);
  const history = useHistory();

  const logout = () => {
    setRole(null);
    window.localStorage.clear();
    history.push("/catalogue");
  };

  return (
    location.pathname !== "/login" &&
    location.pathname !== "/signup" && (
      <>
        <Contact>
          <div>Call Tooly: 99 999 999</div>
          <div>
            <i className="fab fa-facebook-square fa-lg"></i>
            <i className="fab fa-twitter-square fa-lg"></i>
            <i className="fab fa-instagram-square fa-lg"></i>
          </div>
          {!role ? (
            <div className="logbuttons">
              <Link to="/signup">
                <Button variant="outlined" className={classes.submit2}>
                  Sign Up
                </Button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/login">
                <Button variant="contained" className={classes.submit}>
                  Log In
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <Button
                onClick={logout}
                variant="outlined"
                className={classes.submit2}
              >
                Signout
              </Button>
            </div>
          )}
        </Contact>
        <Nav>
          <div>
            <Link to="/catalogue">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
          {role && (
            <div>
              {role === "client" && (
                <>
                  <i className="fas fa-cart-arrow-down fa-2x"></i>
                  <Link
                    to="/cart"
                    style={{ color: "black", fontFamily: "Roboto" }}
                  >
                    &nbsp;Cart
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </>
              )}
              <StyledLink to="/profile">
                <img
                  className="persoimgnav"
                  src={`${
                    JSON.parse(window.localStorage.getItem("connectedUser"))
                      ?.avatar
                  }`}
                />
                <span style={{ color: "black", fontFamily: "Roboto" }}>
                  &nbsp;
                  {
                    JSON.parse(window.localStorage.getItem("connectedUser"))
                      ?.username
                  }
                </span>
              </StyledLink>
            </div>
          )}
        </Nav>
        <Sep></Sep>
      </>
    )
  );
};

const Contact = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  justify-content: space-between;
  background-color: #353535;
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
    i {
      font-size: 1rem;
    }
  }
`;
const Sep = styled.div`
  height: 0.01rem;
  background-color: rgb(235, 235, 235);
  box-shadow: 0px 1px 5px grey;
`;

const StyledLink = styled(Link)`
  img {
    max-width: 100%;
    border-radius: 50%;
  }
`;

export default MainNavbar;
