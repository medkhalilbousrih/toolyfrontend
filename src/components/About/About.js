import { Grid } from "@material-ui/core";
import "./About.css";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";
import FAQ from "./FAQ";
import CssBaseline from "@material-ui/core/CssBaseline";

const About = () => {
  return (
    <>
      <CssBaseline />
      <div className="back">
        <h2 className="contactus">Contact Us</h2>
      </div>
      <div className="bloc">
        <div className="bloc1">
          <Grid className="ktibabloc1">
            <Grid item>
              <div>
                <div className="titregra">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;&nbsp;Adress
                </div>
                <div className="soustext">lorem epsn sfur psro mspeor</div>
                <div className="soustext">lorem epsn sfur psro mspeor</div>
              </div>
              <div>
                <div className="titregra">
                  <i className="fas fa-phone"></i>
                  &nbsp;&nbsp;Phone
                </div>
                <div className="soustext">+216 99 999 999</div>
              </div>
              <div>
                <div className="titregra">
                  <i className="fas fa-envelope"></i>
                  &nbsp;&nbsp;Email
                </div>
                <div className="soustext">Tooly@tooly.com</div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="bloc2">
          <Grid
            className="inputgrid"
            spacing={5}
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <TextField
                className="textfieldbloc2"
                label="Name"
                variant="outlined"
                style={{ width: 350 }}
                color="secondary"
              />
            </Grid>

            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                style={{ width: 350 }}
                color="secondary"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-multiline-static"
                label="Message..."
                multiline
                rows={6}
                variant="outlined"
                style={{ width: 350 }}
                color="secondary"
              />
            </Grid>
          </Grid>
          <Button variant="warning" className="sendmsg">
            Send Message
          </Button>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default About;
