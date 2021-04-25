import { useContext, useState } from "react";
import axios from "axios";
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
      const connectedUser = await axios.post("/api/login", data);
      window.localStorage.setItem(
        "connectedUser",
        JSON.stringify(connectedUser.data)
      );
      setRole(connectedUser.data.role);
      history.push("/catalogue");
    } catch (exception) {
      console.log(exception.response);
      setMsg(exception.response.data);
    }
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
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                ref={register}
                name="username"
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
        </div>
      </Grid>
    </Grid>
  );
}
