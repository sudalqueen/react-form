import React, { useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import useFieldElement from "./useFieldElement";
import { RefContext } from "../context/RefProvider";

const Field = props => {
  const ref = useRef(null);
  const context = useContext(RefContext);

  const { value, handleChange } = useFieldElement(props.initValue || "");

  useEffect(() => {
    context.action.setRefs(ref);
  }, []);

  return (
    <input
      type={props.type}
      name={props.name}
      label={props.label}
      value={value}
      ref={ref}
      onChange={handleChange}
    />
  );
};

export default Field;

Field.propTypes = {
  initValue: PropTypes.any,
  type: PropTypes.oneOf(["text"]),
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string
};

Field.defaultProps = {
  initValue: "",
  type: "text",
  name: null,
  label: null,
  className: null
};
