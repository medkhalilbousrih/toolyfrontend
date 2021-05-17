import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { RoleContext } from "../../contexts/RoleContext";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import signinService from "../Signin/services/signin";
import "./SignInSide.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(./images/zama.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[80]
        : theme.palette.grey[500],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  paper: {
    margin: theme.spacing(0, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(-2, 0, 2),
    color: "black",
    backgroundColor: "#ffc800",
    "&:hover": {
      backgroundColor: "#353535",
      color: "white",
    },
  },
  bold: {
    fontWeight: 600,
    color: "#ffc800",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, formState, errors } = useForm();
  const [role, setRole] = useContext(RoleContext);

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/users", data);
      history.push("/login");
    } catch (exception) {
      console.log(exception.response);
    }
  };
  const responseFacebookClient = async (res) => {
    const connectedUser = await signinService.loginFb({
      ...res,
      role: "client",
    });
    setRole(connectedUser.data.role);
    history.push("/Home");
  };

  const responseFacebookSupplier = async (res) => {
    console.log(res);
    try {
      const connectedUser = await signinService.loginFb({
        ...res,
        role: "supplier",
      });
      setRole(connectedUser.data.role);
      history.push("/Home");
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <TypoSign>
            <Typography className={classes.bold} component="h1" variant="h1">
              Sign Up
            </Typography>
          </TypoSign>
          <TypoPhrase>
            <Typography className="TypoPhrase" component="h6" variant="h6">
              AND PICK OR RENT A TOOL
            </Typography>
          </TypoPhrase>
          <Form className="testform" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                ref={register({ required: true })}
              />

              {errors.email && (
                <Alert variant="danger">Please provide an email adress</Alert>
              )}
            </Form.Group>
            <Form.Group className="testfromgroupe">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                ref={register}
              />
            </Form.Group>
            <Form.Group className="testfromgroupe">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phoneNumber"
                placeholder="Enter phonenumber"
                name="phoneNumber"
                ref={register}
              />
            </Form.Group>
            <Form.Group className="testfromgroupe">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                ref={register}
              />
            </Form.Group>
            <Form.Group className="testfromgroupe">
              <Form.Label>Password Verification</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="passwordVerification"
                ref={register}
              />
            </Form.Group>
            <Form.Group className="testfromgroupe">
              <Form.Label>User Type</Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                name="role"
                ref={register({ required: true })}
              >
                <option value="">Choose Account type</option>
                <option value="client">Client</option>
                <option value="supplier">Supplier</option>
              </Form.Control>
            </Form.Group>

            <Button
              className="signupbtncolor"
              variant="primary"
              type="submit"
              disabled={formState.isSubmitting}
            >
              Submit
            </Button>
          </Form>
          <div>
            <FacebookLogin
              appId="554786282156836"
              fields="name,email,picture"
              callback={responseFacebookClient}
              textButton="Login With Facebook Client"
              cssClass="fb"
            />
          </div>
          <div>
            <FacebookLogin
              appId="554786282156836"
              fields="name,email,picture"
              callback={responseFacebookSupplier}
              textButton="Login With Facebook Supplier"
              cssClass="fb"
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

const TypoSign = styled.div`
  font-family: Roboto;
`;

const TypoPhrase = styled.div`
  font-family: Roboto;
  text-align: left;
  margin-left: -11rem;
`;
