import React from "react";
import Button from "../Button/Button";
import Panel from "../Panel/Panel";
import "./Form.css";

const Form = () => {
  return (
    <Panel title="Change theme using context">
      <Button>Sign up</Button>
      <Button>Log in </Button>
    </Panel>
  );
};

export default Form;
