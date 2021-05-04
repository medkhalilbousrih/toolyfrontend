import { Form, Button, Alert, Col } from "react-bootstrap";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import supplierService from "./services/supplier";

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

const SupplierModify = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const info = new FormData();
    info.append("name", data.name);
    info.append("phoneNumber", data.phoneNumber);
    info.append("state", data.state);
    info.append("city", data.city);
    info.append("password", data.password);
    info.append("passwordVerification", data.passwordVerification);
    info.append("imageUrl", data.imageUrl[0]);
    console.log(data);
    supplierService.updateProfile(info).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Container>
        <Title>
          <h1>
            <i className="fas fa-user-edit"></i> Edit Profile
          </h1>
        </Title>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={9}>
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
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    name="name"
                    ref={register}
                  />
                </Form.Group>
                <Grid item xs={12} sm={8} md={6}>
                  <Form.Row>
                    <Col>
                      <Form.Group className="testfromgroupe">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="Number"
                          placeholder="Enter phonenumber"
                          name="phoneNumber"
                          ref={register}
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Grid>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue=""
                      name="state"
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
                    <Form.Group className="testfromgroupe">
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
                    <Form.Group className="testfromgroupe">
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
export default SupplierModify;
