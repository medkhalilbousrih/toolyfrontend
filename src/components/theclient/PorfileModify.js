import { Form, Button, Alert } from "react-bootstrap";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import ClientService from "../thesupplier/services/supplier";

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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const info = new FormData();
    info.append("imageUrl", data.imageUrl[0]);
    info.append("email", data.email);
    info.append("birthday", data.birthday);
    info.append("phoneNumber", data.phoneNumber);
    info.append("street", data.street);
    info.append("state", data.state);
    info.append("city", data.city);
    info.append("password", data.email);
    info.append("passwordVerification", data.passwordVerfication);

    ClientService.updateProfile(info).then((res) => {
      console.log(res);
    });
  };
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
              <Form className="testform" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Put Your Image"
                    name="imageUrl"
                    ref={register}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    ref={register}
                  />
                </Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="dob">
                      <Form.Label>Select Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="birthday"
                        placeholder="Date of Birth"
                        ref={register}
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
                        ref={register}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Your Local Address</Form.Label>
                  <Form.Control
                    name="street"
                    ref={register}
                    placeholder="Apartment, studio, or floor"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      defaultValue=""
                      ref={register}
                    >
                      <option value="">Choose...</option>
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
                    <Form.Control
                      type="text"
                      placeholder="city"
                      name="city"
                      ref={register}
                    />
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
                        ref={register}
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
                        ref={register}
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
