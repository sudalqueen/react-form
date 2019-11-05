import React, { Component, createRef, cloneElement, forwardRef } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refs: []
    };
  }

  componentDidMount() {
    let tempRefs = [];
    this.props.children.map(() => {
      const ref = createRef();
      tempRefs.push(ref);
    });
    this.setState({
      refs: tempRefs
    });
    this.onSubmit();
  }

  onSubmit = () => {
    console.log(this.state.refs);
  };

  render() {
    const refs = this.state.refs;

    return (
      <>
        {React.Children.map(this.props.children, (child, index) => {
          const ref = refs[index];
          return cloneElement(child, {
            ...child.props,
            ref
          });
        })}
        <button onClick={this.onSubmit}>Click Me!</button>
      </>
    );
  }
}

export default Form;
