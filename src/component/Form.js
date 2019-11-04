import React, { Component, createRef, forwardRef } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refs: []
    };
  }

  componentDidMount() {
    this.onSubmit();
  }

  onSubmit = () => {
    let values = [];
    if (typeof this.props.children === Array) {
      this.props.children.map(child => {
        const newChild = Object.assign({}, child, { ref: createRef() });
        values.push(newChild);
        return console.log(values);
      });
    } else {
      console.log(this.state.refs);
    }
  };

  render() {
    this.state.refs = [];
    const ChildComponentWithRef = React.forwardRef(props => (
      <>
        {React.Children.map(this.props.children, child => {
          const ref = createRef();
          this.state.refs.push(ref);
          return React.cloneElement(child, {
            ...props,
            ref
          });
        })}
        <button onClick={this.onSubmit}>Click Me!</button>
      </>
    ));
    return <ChildComponentWithRef/>;
  }
}

export default Form;
