import styled from "styled-components";

import cat from "./cat.css";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    opacity: "100",
  },
  btn: {
    opacity: "1",
    backgroundColor: "black",
    color: "#ffc800",
    "&:hover": {
      backgroundColor: "#ffc800",
      color: "black",
      boxShadow: "none",
    },
  },
  text: {
    opacity: "100",
    width: "100%",

    color: "red",
    "& label.Mui-focused": {
      color: "#ffc800",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffc800",
    },
  },
}));

const Top = () => {
  const classes = useStyles();
  return (
    <>
      <Cont>
        <Img className="catimg">
          <Title>Catalogue</Title>
          <Wh>
            <div className={classes.margin}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <i class="fas fa-search"></i>
                </Grid>
                <Grid item style={{ width: "30rem" }}>
                  <TextField
                    id="input-with-icon-grid"
                    label="Search"
                    className={classes.text}
                  />
                </Grid>
                <Grid item>
                  <Button
                    size="small"
                    variant="contained"
                    className={classes.btn}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Wh>
        </Img>
      </Cont>
    </>
  );
};

const Cont = styled.div``;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  margin-top: 5rem;
  font-family: "Roboto";
  font-weight: normal;
  font-size: 8rem;
  color: white;
  font-weight: 400;
`;
const Wh = styled.div`
  width: 50%;
  height: 80px;
  border-radius: 35px 35px 0px 0px;
  background: #fff;
  opacity: 0.68;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Top;
