import React from "react";
import "../styles/button.css";
import { connect } from "react-redux";
import { addOperation } from "../actions";

const OperationButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => props.addOperation(props.operation)}
    >
      {props.name}
    </button>
  );
};

const mapStateToProps = (state) => {
  return { output: state.output };
};
export default connect(mapStateToProps, { addOperation })(OperationButton);
