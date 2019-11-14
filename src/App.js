import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import Field from "./component/Field";
import { stat } from "fs";

const App = () => {
  const [state, setState] = useState({name:"김수정"});

  const fetchData = () => {
    setState({
      name: "김수정"
    });
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Form
        onSubmit={data => {
          console.log(data);
          setState(data);
        }}
      >
        <label>이름</label>
        <Field label="name" name="name" type="text" value={state.name} required />
        <div>
          <label>성별</label>
          <label>
            <Field label="gender" name="gender" type="radio" value="Male" />
            Male
          </label>
          <label>
            <Field label="gender" name="gender" type="radio" value="Female" />
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
        <Field type="submit" value="제출" />
      </Form>
      <div>
        <h2>정보</h2>
        {JSON.stringify(state)}
      </div>
    </div>
  );
};

export default App;
