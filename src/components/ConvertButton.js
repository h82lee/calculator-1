import React from "react";
import "../styles/button.css";
import { connect } from "react-redux";
import { convert } from "../actions";

const ConvertButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={() => props.convert(props.operation)}
    >
      {props.operation}
    </button>
  );
};

const mapStateToProps = (state) => {
  return { output: state.output };
};
export default connect(mapStateToProps, { convert })(ConvertButton);
