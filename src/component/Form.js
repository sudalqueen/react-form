import React, { useContext } from "react";
import { RefProvider, RefContext } from "../context/RefProvider";

const Form = props => {
  return (
    <RefProvider>
      <InnerForm props={props} />
    </RefProvider>
  );
};

const InnerForm = props => {
  const context = useContext(RefContext);

  const onSubmit = () => {
    context.refs.map(ref=>{
      console.log(ref.current.name," : ",ref.current.defaultValue)
    })
  };

  return (
    <>
      {props.props.children}
      <button onClick={onSubmit}>Click Me!</button>
    </>
  );
};

export default Form;
