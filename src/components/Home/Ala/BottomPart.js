import Carousel from "react-bootstrap/Carousel";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const BottomPart = () => {
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "3rem" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/tools.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/s1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/s2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/s3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <h3 style={{ marginTop: "2rem" }}>Our Partners</h3>
        <Partners>
          <img src="./images/e3.jpg" style={{ height: "50%", width: "20%" }} />
          <img src="./images/e1.jpg" style={{ width: "15%" }} />
          <img src="./images/e2.jpg" style={{ width: "10%" }} />
          <img src="./images/e4.jpg" style={{ width: "20%" }} />
          <img src="./images/e5.jpg" style={{ width: "20%" }} />
        </Partners>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};

const Partners = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: baseline;
`;
export default BottomPart;
