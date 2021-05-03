import { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "react-bootstrap/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { RoleContext } from "../../contexts/RoleContext";
import signinService from "./services/signin";
import FacebookLogin from "react-facebook-login";
import "./Signin.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: "url(./images/SIn.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  paperkbira: {
    backgroundColor: "white",
    height: "35rem",
    marginTop: "7rem",

    borderRadius: "0.5rem",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: "#353535",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ffc800",
    color: "Black",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [role, setRole] = useContext(RoleContext);
  const [msg, setMsg] = useState(null);
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const connectedUser = await signinService.login(data);
      setRole(connectedUser.data.role);
      history.push("/catalogue");
    } catch (exception) {
      setMsg(exception.response.data);
    }
  };

  const loginFb = async (res) => {
    const connectedUser = await signinService.loginFb(res);
    setRole(connectedUser.data.role);
    history.push("/catalogue");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid
        item
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
        className={classes.paperkbira}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Form className="signinform" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                ref={register}
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={register}
                name="password"
              />
            </Form.Group>
            <Button className="btnsignin" variant="primary" type="submit">
              Submit
            </Button>
            {msg && <Alert variant="danger">{msg}</Alert>}
          </Form>
          <div>
            <FacebookLogin
              appId="554786282156836"
              fields="name,email,picture"
              textButton="Login With Facebook"
              callback={loginFb}
              cssClass="fbl"
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
