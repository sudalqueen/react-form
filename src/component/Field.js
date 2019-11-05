import React from "react";
import PropTypes from "prop-types";

import useFieldElement from "./useFieldElement";

const Field = (props, ref) => {
  const { value, handleChange } = useFieldElement(props.initValue || "");
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

export default React.forwardRef((props, ref) => Field(props, ref));

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
