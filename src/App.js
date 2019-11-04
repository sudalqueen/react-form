import React from "react";
import Form from "./component/Form";
import Field from "./component/Field";

function App() {
  return (
    <Form>
      <Field label="Test" name="Test" type="text"/>
      <Field label="Test2" name="Test2" type="text"/>
    </Form>
  );
}

export default App;
