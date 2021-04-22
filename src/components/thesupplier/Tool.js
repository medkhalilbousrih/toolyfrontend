import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
const Tool = ({ data }) => {
  return (
    <CARD>
      <Card.Img variant="top" src={`${data.imageUrls[0]}`} />
      <CardBody>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.category}</Card.Text>
        <Card.Text>{data.price}</Card.Text>
      </CardBody>
      <BtnDiv>
        <Btn variant="outline-success">update</Btn>
        <Btn variant="outline-danger">delete</Btn>
      </BtnDiv>
    </CARD>
  );
};

const BtnDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CARD = styled(Card)`
  margin: 0.5rem 0.5rem 0.5rem 0rem;
  width: 15rem;
  height: 20rem;
  img {
    max-width: 100%;
    height: 10rem;
  }
`;
const Btn = styled(Button)`
  height: 2rem;
  font-size: 10px;
`;

const CardBody = styled(Card.Body)`
  background-color: #ffc800;
  height: 5rem;
  font-size: 0.7rem;
  padding-top: 0.2rem;
  line-height: 5px;
  font-weight: bolder;
`;

export default Tool;
