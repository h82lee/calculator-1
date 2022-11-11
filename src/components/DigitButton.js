import React from "react";
import "../styles/button.css";
import { connect } from "react-redux";
import { addDigit } from "../actions";

const DigitButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => props.addDigit(props.digit)}
    >
      {props.digit}
    </button>
  );
};

const mapStateToProps = (state) => {
  return { output: state.output };
};
export default connect(mapStateToProps, { addDigit })(DigitButton);
