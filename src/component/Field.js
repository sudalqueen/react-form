import React, { useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import useFieldElement from "./useFieldElement";
import { RefContext } from "../context/RefProvider";

const Field = props => {
  const ref = useRef(null);
  const context = useContext(RefContext);

  const { value, handleChange } = useFieldElement(props.value || "");

  useEffect(() => {
    context.action.setRefs(ref);
  }, []);

  return (
    <input
      type={props.type}
      name={props.name}
      label={props.label}
      value={value}
      placeholder={props.placeholder}
      className={props.className}
      ref={ref}
      onChange={handleChange}
      required={props.required}
      pattern={props.pattern}
    />
  );
};

export default Field;

Field.propTypes = {
  type: PropTypes.oneOf(["text", "radio", "checkbox"]),
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string
};

Field.defaultProps = {
  type: "text",
  name: null,
  label: null,
  value: "",
  placeholder: null,
  className: null,
  id: null,
  required: false,
  pattern: null
};
