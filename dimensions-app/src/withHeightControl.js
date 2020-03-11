import React, { Component } from "react";
import { INITIAL_DIV_HEIGHT } from "./constants";

function withHeightControl(WrappedComponent) {
  return class extends Component {
    state = {
      divHeight: INITIAL_DIV_HEIGHT
    };

    setDivHeight = height => {
      const divHeight = window.setDivHeight(height);
      this.setState({ divHeight });
    };

    onDivHeightChange = ({ target: { value } }) => {
      console.log(value);
      const height = Number(value);
      if (!isNaN(height) && height >= 0) {
        this.setDivHeight(height);
      }
    };

    render() {
      const { divHeight } = this.state;
      return (
        <WrappedComponent
          divHeight={divHeight}
          onDivHeightChange={this.onDivHeightChange}
        />
      );
    }
  };
}

export default withHeightControl;
