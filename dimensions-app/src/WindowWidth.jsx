import React, { Component } from "react";

class WindowWidth extends Component {
  state = {
    windowWidth: 0
  };

  componentDidMount() {
    this.initResizeListener();
  }

  componentWillUnmount() {
    this.deinitResizeListener();
  }

  initResizeListener = () => {
    this.setWindowDimensions();
    window.addEventListener("resize", this.setWindowDimensions);
  };

  deinitResizeListener = () => {
    window.removeEventListener("resize", this.setWindowDimensions);
  };

  setWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };

  render() {
    const { windowWidth } = this.state;
    return <span>Window width is {windowWidth}</span>;
  }
}

export default WindowWidth;
