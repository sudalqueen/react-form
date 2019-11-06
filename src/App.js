import React from "react";
import Form from "./component/Form";
import Field from "./component/Field";

function App() {
  return (
    <Form>
      <Field label="Test" name="Test" type="text" />
      <Field label="Test2" name="Test2" type="text" />
      <div>
        <Field label="Test3" name="Test3" type="text"/>
      </div>
    </Form>
  );
}

export default App;
