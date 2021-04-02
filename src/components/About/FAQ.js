import { Paper, Grid } from "@material-ui/core";
import "./Faq.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperyelloww: {
    width: "30rem",
    height: "15rem",
    borderRadius: "40px",
    paddingLeft: "2rem",
    paddingTop: "2rem",
    backgroundColor: "#ffc800",
  },
  Question: {
    paddingRight: "2rem",
    fontSize: "1rem",
  },
  reponse: {
    fontSize: "1rem",
    paddingRight: "2rem",
  },
  paperblack: {
    width: "22rem",
    height: "20rem",
    borderRadius: "40px",
    paddingLeft: "2rem",
    paddingTop: "2rem",
    backgroundColor: "#353535",
    color: "white",
  },
  paperblack2: {
    width: "22rem",
    height: "20rem",
    borderRadius: "40px",
    paddingLeft: "2rem",
    paddingTop: "2rem",
    backgroundColor: "#353535",
    color: "white",
  },
  paperblack3: {
    width: "22rem",
    height: "20rem",
    borderRadius: "40px",
    paddingLeft: "2rem",
    paddingTop: "2rem",
    backgroundColor: "#353535",
    color: "white",
  },
  paperyelloww2: {
    width: "30rem",
    height: "15rem",
    borderRadius: "40px",
    paddingLeft: "2rem",
    paddingTop: "2rem",
    marginTop: "2rem",
    backgroundColor: "#ffc800",
  },
  itemblack3: {
    marginTop: "-1rem",
  },
  rowrow: {
    marginTop: "2rem",
  },
  FAQ: {
    paddingTop: "3rem",
    textAlign: "center",
    fontWeight: "Roboto",
    fontWeight: "normal",
    fontSize: "6rem",
    fontWeight: "600",
  },
}));

const FAQ = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.FAQ}>F.A.Q. ?</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={3}
        className="row1"
      >
        <Grid item>
          <Paper className={classes.paperyelloww}>
            <h6 className={classes.Question}>
              LOREM LQSDO MEZERJF DSSOE M SZIH IDBHS ?
            </h6>
            <p className={classes.reponse}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </Paper>
        </Grid>
        <Grid item className="itemblack1">
          <Paper className={classes.paperblack}>
            <h6 className="QuestionB">
              LOREM LQSDO MEZERJF DSSOE M SZIH IDBHS ?
            </h6>
            <p className="reponseB">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={3}
        className="row1"
      >
        <Grid item className="itemblack2">
          <Paper className={classes.paperblack2}>
            <h6 className="QuestionB2">
              LOREM LQSDO MEZERJF DSSOE M SZIH IDBHS ?
            </h6>
            <p className="reponseB2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paperyelloww2}>
            <h6 className="Question">
              LOREM LQSDO MEZERJF DSSOE M SZIH IDBHS ?
            </h6>
            <p className="reponse">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={3}
        className={classes.rowrow}
      >
        <Grid item>
          <Paper className={classes.paperyelloww}>
            <h6 className="Question">
              LOREM LQSDO MEZERJF DSSOE M SZIH IDBHS ?
            </h6>
            <p className="reponse">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </Paper>
        </Grid>
        <Grid item className={classes.itemblack3}>
          <Paper className={classes.paperblack3}>
            <h6 className="QuestionB3">
              LOREM LQSDO MEZERJF DSSOE M SZIH IDBHS ?
            </h6>
            <p className="reponseB3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <br />
    </>
  );
};

export default FAQ;
