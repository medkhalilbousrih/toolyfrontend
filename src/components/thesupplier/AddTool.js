import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toolService from "./services/tools";

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="hammer"
          ref={register}
          name="name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="hammer"
          ref={register}
          name="brand"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="hammer"
          ref={register}
          name="price"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="hammer"
          ref={register}
          name="category"
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          ref={register}
          name="description"
        />
      </Form.Group>

      <input type="file" ref={register} name="toolImages" multiple />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTool;
