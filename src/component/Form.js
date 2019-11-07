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
  const [values, setValues] = useState({});
  const context = useContext(RefContext);

  const onSubmit = (event) => {
    event.preventDefault();
    context.refs.map(ref => {
      const current = ref.current;
      if (current.type === "radio" || current.type === "checkbox") {
        getChecked(current);
      } else {
        getValue(current);
      }
    });
    alert(JSON.stringify(values));
  };

  const getValue = current => {
    if (current.type === "text") {
      return setValues(
        Object.assign(values, { [current.name]: current.value })
      );
    }
  };

  const getChecked = current => {
    if (current.type === "checkbox") {
      if (current.checked) {
        let checkboxArray = values[current.name];
        if (!checkboxArray) {
          return setValues(
            Object.assign(values, { [current.name]: [current.value] })
          );
        }
        if (checkboxArray.indexOf(current.value) === -1) {
          return setValues(
            Object.assign(values, {
              [current.name]: checkboxArray.concat(current.value)
            })
          );
        }
      }
    } else {
      if (current.checked) {
        return setValues(
          Object.assign(values, { [current.name]: current.value })
        );
      }
    }
    return undefined;
  };

  return (
    <form>
      {props.props.children}
      <button onClick={onSubmit}>Click Me!</button>
    </form>
  );
};

export default Form;
