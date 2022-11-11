import React from "react";
import "../styles/button.css";
import { connect } from "react-redux";
import { clear } from "../actions";

const ClearButton = (props) => {
  return (
    <button className={props.className} onClick={() => props.clear(props.name)}>
      {props.name}
    </button>
  );
};

const mapStateToProps = (state) => {
  return { output: state.output };
};
export default connect(mapStateToProps, { clear })(ClearButton);
