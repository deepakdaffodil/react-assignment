import React from "react";
import PropTypes from 'prop-types';

function NumberInput({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input type="number" value={value || ""} onChange={onChange} />
    </label>
  );
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
}

export default NumberInput;
