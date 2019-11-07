import React from "react";
import Form from "./component/Form";
import Field from "./component/Field";

function App() {
  return (
    <Form>
      <label>이름</label>
      <Field label="name" name="name" type="text" required pattern="banana"/>
      <div>
        <label>성별</label>
        <label>
          <Field label="gender" name="gender" type="radio" value="Male"/>
          Male
        </label>
        <label>
          <Field label="gender" name="gender" type="radio" value="Female"/>
          Female
        </label>
      </div>
      <div>
        <label>좋아하는 색상</label>
        <label>
          <Field label="colors" name="colors" type="checkbox" value="RED" />
          RED
        </label>
        <label>
          <Field label="colors" name="colors" type="checkbox" value="BLUE" />
          BLUE
        </label>
        <label>
          <Field label="colors" name="colors" type="checkbox" value="GREEN" />
          GREEN
        </label>
      </div>
    </Form>
  );
}

export default App;
