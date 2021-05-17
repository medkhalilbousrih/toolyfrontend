import Carousel from "react-bootstrap/Carousel";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopPart = () => {
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "4rem" }}>
        <Catalog>
          <AA>
            <img src="./images/e.jpg" style={{ width: "100%" }} />
          </AA>
          <Az>
            <Link to="/profile">
              <img
                src="./images/a.jpg"
                style={{ width: "100%", border: "1px solid #e0ddd5" }}
              />
            </Link>
            <Link to="/catalogue">
              <img
                src="./images/z.jpg"
                style={{ width: "100%", border: "1px solid #e0ddd5" }}
              />
            </Link>
          </Az>
        </Catalog>
      </Container>
      <Ligne>
        <Container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Par>
            <i className="fas fa-coins"></i>&nbsp;&nbsp;
            <p>PERSONALIZED PRICES</p>
          </Par>
          <Par>
            <i class="far fa-calendar-alt"></i>&nbsp;&nbsp;
            <p>ONLINE BOOKING</p>
          </Par>
          <Par>
            <i class="fas fa-map-signs"></i>&nbsp;&nbsp;
            <p>WE ARE EVERYWHERE</p>
          </Par>
          <Par>
            <i class="fas fa-tools"></i>&nbsp;&nbsp;
            <p>TOOLS DIVERSITY</p>
          </Par>
          <Par>
            <i class="fas fa-truck"></i>&nbsp;&nbsp;
            <p>DELIVERY IF POSSIBLE</p>
          </Par>
        </Container>
      </Ligne>
    </>
  );
};

const Catalog = styled.div`
  display: flex;
`;
const AA = styled.div``;
const Az = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;
const Ligne = styled.div`
  background-color: #353535;
  height: 3rem;
  margin-top: 2rem;
`;
const Par = styled.div`
  display: flex;
  color: white;
  align-items: baseline;
  font-size: 1rem;
  padding-top: 0.6rem;
  i {
    color: #ffc800;
  }
`;

export default TopPart;
