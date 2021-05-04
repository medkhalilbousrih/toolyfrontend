import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import toolService from "../../thesupplier/services/tools";
import { useParams } from "react-router-dom";

function ProductModify(props) {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const onSubmit = (data) => {
    const tool = new FormData();
    tool.append("name", data.name);
    tool.append("category", data.category);
    tool.append("brand", data.brand);
    tool.append("description", data.description);
    tool.append("price", data.price);
    for (const image of data.toolImages) {
      tool.append("toolImages", image);
    }
    toolService
      .toolUpdate(id, tool)
      .then((res) => console.log("success"))
      .catch((err) => console.log(err));
  };

  return props.trigger ? (
    <>
      <Popup>
        <PopupInner>
          <Btn>
            <i
              onClick={() => props.setTrigger(false)}
              className="fas fa-times"
            ></i>
          </Btn>

          {props.children}
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Title>
              <h1>
                <i className="fas fa-plus-square"> </i>&nbsp;UPDATE TOOL
              </h1>
            </Title>
            <StyledGroup>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Tool Name Here."
                name="name"
                ref={register}
              />
            </StyledGroup>
            <StyledGroup>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="The Brand of the Tool"
                name="brand"
                ref={register}
              />
            </StyledGroup>
            <StyledGroup>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="The Price of a single day"
                name="price"
                ref={register}
              />
            </StyledGroup>
            <StyledGroup controlId="exampleForm.SelectCustom">
              <Form.Label>Categories</Form.Label>
              <Form.Control
                as="select"
                custom
                name="category"
                defaultValue=""
                ref={register}
              >
                <option value="">Choose category</option>
                <option>construction</option>
                <option>electricity</option>
                <option>gardening</option>
              </Form.Control>
            </StyledGroup>
            <StyledGroup>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue=""
                    ref={register}
                    name="state"
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

                <Form.Group
                  as={Col}
                  controlId="formGridCity"
                  name="city"
                  ref={register}
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
            </StyledGroup>
            <StyledGroup controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                ref={register}
              />
            </StyledGroup>
            <StyledGroup>
              <input type="file" name="toolImages" ref={register} multiple />
            </StyledGroup>
            <StyledGroup>
              <StyledButton variant="primary" type="submit">
                Submit
              </StyledButton>
            </StyledGroup>
          </StyledForm>
        </PopupInner>
      </Popup>
    </>
  ) : (
    ""
  );
}

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const PopupInner = styled.div`
  position: relative;
  width: 70%;
  background-color: #fff;
`;
const Btn = styled.div`
  margin-left: 97%;
  padding-top: 1rem;
  i {
    postion: relative;
    font-size: 1.5rem;
  }
`;

const StyledForm = styled(Form)`
  margin-left: 2rem;
  width: 90%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const StyledGroup = styled(Form.Group)`
  margin-left: 2rem;
`;

const Title = styled.div`
  i {
    font-size: 2.4rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: #ffc800;
  border: none;
  color: black;
  border-radius: 1;
  width: 100%;
  &:hover {
    color: #ffc800;
    background-color: black;
  }
`;

export default ProductModify;
