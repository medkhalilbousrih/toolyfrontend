import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import toolService from "./services/tools";
const AddTool = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (tool) => {
    toolService.create(tool).then((res) => console.log(res));
  };

  return (
    <FormTool>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tool name"
            name="name"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Categorie</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter tool categorie"
            name="categorie"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="price"
            name="brand"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter tool price"
            name="price"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter tool state"
            name="state"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="....."
            name="description"
            ref={register}
          />
        </Form.Group>
        <Button variant="dark" className="float-right" type="submit">
          Submit
        </Button>
      </Form>
    </FormTool>
  );
};
const FormTool = styled.div`
  height: 700px;
  margin: 0 2rem;
`;
export default AddTool;
