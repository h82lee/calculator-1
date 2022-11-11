import React from "react";
import "../styles/button.css";
import { connect } from "react-redux";
import { deleteDigit } from "../actions";

const DeleteButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => props.deleteDigit(props.digit)}
    >
      {props.digit}
    </button>
  );
};

const mapStateToProps = (state) => {
  return { output: state.output };
};
export default connect(mapStateToProps, { deleteDigit })(DeleteButton);
