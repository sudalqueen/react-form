import React, { useState, useContext } from "react";
import { RefProvider, RefContext } from "../context/RefProvider";

const Form = props => {
  return (
    <RefProvider>
      <InnerForm props={props} />
    </RefProvider>
  );
};

const InnerForm = props => {
  const [result, setResult] = useState({});
  const context = useContext(RefContext);

  const onSubmit = () => {
    context.refs.map(ref => {
      const current = ref.current;
      if (current.type === "radio" || current.type === "checkbox") {
        getChecked(current);
      } else {
        getValue(current);
      }
    });
    console.log(result);
  };

  const getValue = current => {
    if (current.type === "text") {
      return setResult(
        Object.assign(result, { [current.name]: current.value })
      );
    }
  };

  const getChecked = current => {
    if (current.type === "checkbox") {
      if (current.checked) {
        let checkboxArray = result[current.name];
        if (!checkboxArray) {
          return setResult(
            Object.assign(result, { [current.name]: [current.value] })
          );
        }
        if (checkboxArray.indexOf(current.value) === -1) {
          return setResult(
            Object.assign(result, {
              [current.name]: checkboxArray.concat(current.value)
            })
          );
        }
      }
    } else {
      if (current.checked) {
        return setResult(
          Object.assign(result, { [current.name]: current.value })
        );
      }
    }
    return undefined;
  };

  return (
    <>
      {props.props.children}
      <button onClick={onSubmit}>Click Me!</button>
    </>
  );
};

export default Form;
