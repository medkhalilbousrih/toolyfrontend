import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MiddlePart = () => {
  return (
    <>
      <Container maxWidth="lg">
        <h3 style={{ marginTop: "1rem" }}>CATEGORIES</h3>
        <CatType>
          <Box>
            <img src="./images/cc.PNG" style={{}} />
            <p>
              {" "}
              <Link to="/catalogue/construction">Construction</Link>{" "}
            </p>
            <i class="fas fa-chevron-right"></i>
          </Box>
          <Box>
            <img src="./images/gg.PNG" style={{ height: "90%" }} />
            <p>
              <Link to="/catalogue/gardening">Gardening</Link>
            </p>
            <i class="fas fa-chevron-right"></i>
          </Box>
          <Box>
            <img src="./images/AA.PNG" style={{}} />
            <p>
              <Link to="/catalogue/energy">Energy & HVAC</Link>
            </p>
            <i class="fas fa-chevron-right"></i>
          </Box>
        </CatType>
        <CatType>
          <Box>
            <img src="./images/ff.PNG" style={{}} />
            <p>
              <Link to="/catalogue/fieldwork">FieldWork</Link>
            </p>
            <i class="fas fa-chevron-right"></i>
          </Box>
          <Box>
            <img src="./images/ee.PNG" style={{}} />
            <p>Events </p>
            <i class="fas fa-chevron-right"></i>
          </Box>
          <Box>
            <img src="./images/TT.PNG" style={{}} />
            <p>transport</p>
            <i class="fas fa-chevron-right"></i>
          </Box>
        </CatType>
        <h3 style={{ marginTop: "2rem" }}>How Do We Operates ?</h3>
        <CatType>
          <Field>
            <i class="fas fa-question" style={{ color: "#9b0404" }}></i>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page
            </p>
          </Field>
          <Field>
            <i class="fas fa-check-double" style={{ color: "#4def35" }}></i>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page
            </p>
          </Field>
          <Field>
            <i class="fas fa-virus" style={{ color: "#0e4404" }}></i>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page
            </p>
          </Field>
        </CatType>
        <CatType>
          <Field>
            <i class="far fa-clock" style={{ color: "#256ed8" }}></i>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page
            </p>
          </Field>
          <Field>
            <i class="far fa-bell" style={{ color: "#efe811" }}></i>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page
            </p>
          </Field>
          <Field>
            <i class="far fa-tired" style={{ color: "#ff0000" }}></i>
            <p>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page
            </p>
          </Field>
        </CatType>
      </Container>
      <Ligne>
        <h5 style={{ textAlign: "center", paddingTop: "0.6rem" }}>
          Are you a Professional ? have the tools but not the means to gain
          money from ! What are you waiting for{" "}
          <span style={{ textDecoration: "underline" }}>Join Us</span>!
        </h5>
      </Ligne>
    </>
  );
};

const CatType = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Box = styled.div`
  margin-top: 2rem;
  width: 25%;
  height: 9rem;
  border: 1px solid #e0ddd5;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 1.5rem;
  }
`;

const Field = styled.div`
  margin-top: 2rem;
  width: 25%;
  height: 9rem;
  border: 1px solid transparent;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 0.8rem;
  }
  i {
    font-size: 2.5rem;
  }
`;

const Ligne = styled.div`
  background-color: #ffc800;
  height: 3rem;
  margin-top: 3rem;
`;

export default MiddlePart;
