import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
const Tool = () => {
  return (
    <>
      <CARD>
        <Card.Img variant="top" src="/Images/aymen.jpg" />
        <CardBody>
          <Card.Title>Tool Name</Card.Title>
          <Card.Text>Category</Card.Text>
          <Card.Text>Price: 30 Dinars</Card.Text>
        </CardBody>
        <BtnDiv>
          <Btn variant="outline-success">update</Btn>
          <Btn variant="outline-danger">delete</Btn>
        </BtnDiv>
      </CARD>
      <CARD>
        <Card.Img variant="top" src="/Images/aymen.jpg" />
        <CardBody>
          <Card.Title>Tool Name</Card.Title>
          <Card.Text>Category</Card.Text>
          <Card.Text>Price: 30 Dinars</Card.Text>
        </CardBody>
        <BtnDiv>
          <Btn variant="outline-success">update</Btn>
          <Btn variant="outline-danger">delete</Btn>
        </BtnDiv>
      </CARD>
      <CARD>
        <Card.Img variant="top" src="/Images/aymen.jpg" />
        <CardBody>
          <Card.Title>Tool Name</Card.Title>
          <Card.Text>Category</Card.Text>
          <Card.Text>Price: 30 Dinars</Card.Text>
        </CardBody>
        <BtnDiv>
          <Btn variant="outline-success">update</Btn>
          <Btn variant="outline-danger">delete</Btn>
        </BtnDiv>
      </CARD>
      <CARD>
        <Card.Img variant="top" src="/Images/aymen.jpg" />
        <CardBody>
          <Card.Title>Tool Name</Card.Title>
          <Card.Text>Category</Card.Text>
          <Card.Text>Price: 30 Dinars</Card.Text>
        </CardBody>
        <BtnDiv>
          <Btn variant="outline-success">update</Btn>
          <Btn variant="outline-danger">delete</Btn>
        </BtnDiv>
      </CARD>
      <CARD>
        <Card.Img variant="top" src="/Images/aymen.jpg" />
        <CardBody>
          <Card.Title>Tool Name</Card.Title>
          <Card.Text>Category</Card.Text>
          <Card.Text>Price: 30 Dinars</Card.Text>
        </CardBody>
        <BtnDiv>
          <Btn variant="outline-success">update</Btn>
          <Btn variant="outline-danger">delete</Btn>
        </BtnDiv>
      </CARD>
      <CARD>
        <Card.Img variant="top" src="/Images/aymen.jpg" />
        <CardBody>
          <Card.Title>Tool Name</Card.Title>
          <Card.Text>Category</Card.Text>
          <Card.Text>Price: 30 Dinars</Card.Text>
        </CardBody>
        <BtnDiv>
          <Btn variant="outline-success">update</Btn>
          <Btn variant="outline-danger">delete</Btn>
        </BtnDiv>
      </CARD>
    </>
  );
};

const BtnDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CARD = styled(Card)`
  margin: 1rem 1rem 1rem 0rem;
  width: 13.3rem;
`;
const Btn = styled(Button)`
  height: 2rem;
`;

const CardBody = styled(Card.Body)`
  background-color: #fad85e;
`;

export default Tool;
