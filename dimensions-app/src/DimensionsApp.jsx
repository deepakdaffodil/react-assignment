import React from "react";
import PropTypes from 'prop-types';
import withHeightControl from "./withHeightControl";
import NumberInput from "./NumberInput";
import WindowWidth from "./WindowWidth";
import "./style.css";

function DimensionsApp(props) {
  const { divHeight, onDivHeightChange } = props;
  return (
    <div className="container" style={{ height: divHeight }}>
      <NumberInput
        label="Div height: "
        value={divHeight}
        onChange={onDivHeightChange}
      />
      <WindowWidth />
    </div>
  );
}

DimensionsApp.propTypes = {
  divHeight: PropTypes.number.isRequired,
  onDivHeightChange: PropTypes.func.isRequired
}

export default withHeightControl(DimensionsApp);
