import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

import MenuItem from "@material-ui/core/MenuItem";

const Tstatee = [
  {
    value: "New Tool",
    label: "New Tool",
  },
  {
    value: "Good Condition",
    label: "Good condition",
  },
  {
    value: "Medium Condition",
    label: "Medium Condition",
  },
  {
    value: "Bad condition",
    label: "Bad condition",
  },
];

const currencies = [
  {
    value: "Category 1",
    label: "Category 1",
  },
  {
    value: "Category 2",
    label: "Category 2",
  },
  {
    value: "Category 3",
    label: "Category 3",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0.5rem",
  },
  image: {
    backgroundImage: "url(./images/tools.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  paper: {
    margin: theme.spacing(1, 3),
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
    fontWeight: 300,
    color: "Black",
    fontSize: "1.5rem",
    textAlign: "left",
  },
}));

const Formulaire = () => {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [Tstate, setTstate] = React.useState("");

  const handleotherChange = (event) => {
    setTstate(event.target.value);
  };

  return (
    <>
      <TypoSign>
        <i className="fas fa-plus-square"></i>
        &nbsp;&nbsp;
        <h2>Add Tools</h2>
      </TypoSign>

      <Grid container component="main" className={classes.root}>
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={8}
          md={12}
          component={Paper}
          elevation={0}
          square
        >
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="standard-required"
                    label="Product Name"
                    name="Product Name"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="standard-required"
                    label="Model"
                    name="Model"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="standard-required"
                    label="Brand"
                    name="Brand"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    label="Select"
                    value={Tstate}
                    onChange={handleotherChange}
                    helperText="Please select The Tool Current State"
                    variant="outlined"
                  >
                    {Tstatee.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="outlined-select-Tstate"
                    select
                    fullWidth
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select a Category"
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    id="standard-required"
                    label="Price of One Day"
                    helperText="In Dinars"
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <label for="formFileMultiple" className="form-label">
                      Tool Photos
                    </label>
                    <br />
                    <div
                      style={{
                        border: "1px solid #c5c3c3",
                        borderRadius: "4px",
                      }}
                    >
                      <input type="file" id="formFileMultiple" multiple></input>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    multiline
                    required
                    fullWidth
                    id="standard-required"
                    label="Way Of Use"
                    name="Way Of Use"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    multiline
                    required
                    fullWidth
                    id="standard-required"
                    label="Caracteristiques"
                    name="Caracteristiques"
                  />
                </Grid>

                <Grid item xs={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
const TypoSign = styled.div`
  font-family: Roboto;
  font-size: 1.5rem;
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export default Formulaire;
