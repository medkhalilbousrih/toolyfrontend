import { Form, Button, Alert } from "react-bootstrap";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "4rem",
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
}));

const ProfileModify = () => {
  const classes = useStyles();
  const { register, handleSubmit, formState, errors } = useForm();
  return (
    <>
      <Container>
        <Title>
          <h1>
            <i class="fas fa-user-edit"></i> Edit Profile
          </h1>
        </Title>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={9} square>
            <div>
              <Form className="testform">
                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Put Your Image"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                  />

                  {errors.email && (
                    <Alert variant="danger">
                      Please provide an email adress
                    </Alert>
                  )}
                </Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dd"
                        placeholder="Date of Birth"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="phoneNumber"
                        placeholder="Enter phonenumber"
                        name="phoneNumber"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Your Local Address</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Tunis</option>
                      <option>Ariana</option>
                      <option>Ben Arous</option>
                      <option>Mannouba</option>
                      <option>Bizerte</option>
                      <option>Nabeul</option>
                      <option>Beja</option>
                      <option>Jendouba</option>
                      <option>Zaghouan</option>
                      <option>Siliana</option>
                      <option>Kef</option>
                      <option>Sousse</option>
                      <option>Monastir</option>
                      <option>Mahdia</option>
                      <option>Kasserine</option>
                      <option>Sidi Bouzid</option>
                      <option>Kairouan</option>
                      <option>Gafsa</option>
                      <option>Sfax</option>
                      <option>Gabes</option>
                      <option>Medenine</option>
                      <option>Tozeur</option>
                      <option>Kebili</option>
                      <option>Ttataouine</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group column>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group column>
                      <Form.Label>Password Verification</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="passwordVerification"
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Button
                  className="signupbtncolor"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  i {
    font-size: 2.4rem;
  }
`;
export default ProfileModify;
