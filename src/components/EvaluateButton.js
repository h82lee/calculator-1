import React from "react";
import "../styles/button.css";
import { connect } from "react-redux";
import { evaluate } from "../actions";

const DigitButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => props.evaluate(props.operation)}
    >
      {props.operation}
    </button>
  );
};

const mapStateToProps = (state) => {
  return { output: state.output };
};
export default connect(mapStateToProps, { evaluate })(DigitButton);
