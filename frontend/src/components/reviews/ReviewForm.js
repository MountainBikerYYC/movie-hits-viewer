import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const ReviewForm = ({ handleSubmit, revText, labelText }) => {
  const [text, setText] = useState(revText);

  const handleClick = (e) => {
    e.preventDefault();
    setText("");
    handleSubmit();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={text} as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-info" onClick={(e) => handleClick(e)}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
