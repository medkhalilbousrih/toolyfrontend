import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toolService from "./services/tools";
import styled from "styled-components";

const AddTool = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const tool = new FormData();
      tool.append("name", data.name);
      tool.append("category", data.category);
      tool.append("brand", data.brand);
      tool.append("description", data.description);
      tool.append("price", data.price);
      for (const image of data.toolImages) {
        tool.append("toolImages", image);
      }
      await toolService.create(tool);
    } catch (exc) {
      console.log(exc.response);
    }
  };

  return (
    <>
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Title>
            <h1>
              <i className="fas fa-plus-square"> </i>&nbsp;ADD TOOL
            </h1>
          </Title>
          <StyledGroup>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Tool Name Here."
              ref={register}
              name="name"
            />
          </StyledGroup>
          <StyledGroup>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="The Brand of the Tool"
              ref={register}
              name="brand"
            />
          </StyledGroup>
          <StyledGroup>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="The Price of a single day"
              ref={register}
              name="price"
            />
          </StyledGroup>
          <StyledGroup>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="hammer"
              ref={register}
              name="category"
            />
          </StyledGroup>
          <StyledGroup controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              ref={register}
              name="description"
            />
          </StyledGroup>
          <StyledGroup>
            <input type="file" ref={register} name="toolImages" multiple />
          </StyledGroup>
          <StyledGroup>
            <StyledButton variant="primary" type="submit">
              Submit
            </StyledButton>
          </StyledGroup>
        </StyledForm>
        <Separator></Separator>
        <Informations>
          <h3>Basic Informations</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
          </p>
        </Informations>
      </Container>
    </>
  );
};

const StyledForm = styled(Form)`
  margin-left: 2rem;
  width: 50%;
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

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Separator = styled.div`
  border-right: 0.1rem solid rgb(235, 235, 235);
  margin-left: 2rem;
`;
const Informations = styled.div`
  white-space: normal;
  width: 40%;
  h3 {
    color: #ffc800;
    font-weight: bold;
  }
  p {
    font-weight: bold;
  }

  margin-top: 5rem;
`;

export default AddTool;
