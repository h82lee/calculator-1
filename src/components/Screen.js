import React from "react";
import "../styles/screen.css";
import { connect } from "react-redux";

const Screen = (props) => {
  return (
    <div className="screen">
      <div className="output">{props.output}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { output: state.output };
};

export default connect(mapStateToProps)(Screen);
