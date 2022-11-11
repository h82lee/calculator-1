import React from "react";
import "../styles/body.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import ClearButton from "./ClearButton";
import DeleteButton from "./DeleteButton";
import EvaluateButton from "./EvaluateButton";
import ConvertButton from "./ConvertButton";
import Screen from "./Screen";

const Body = () => {
  return (
    <div className="grid-container">
      <div className="grid-item screen">
        <Screen />
      </div>
      <div className="grid-item">
        <ClearButton className="btn extra" name="AC" />
      </div>
      <div className="grid-item">
        <DeleteButton className="btn extra" digit="DEL" />
      </div>
      <div className="grid-item">
        <ConvertButton className="btn extra" operation="+/-" />
      </div>
      <div className="grid-item">
        <OperationButton className="btn operation" name="÷" operation="/" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="7" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="8" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="9" />
      </div>
      <div className="grid-item">
        <OperationButton className="btn operation" name="×" operation="*" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="4" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="5" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="6" />
      </div>
      <div className="grid-item">
        <OperationButton className="btn operation" name="−" operation="-" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="1" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="2" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="3" />
      </div>
      <div className="grid-item">
        <OperationButton className="btn operation" name="+" operation="+" />
      </div>
      <div className="grid-item zero">
        <DigitButton className="btn zero" digit="0" />
      </div>
      <div className="grid-item">
        {" "}
        <DigitButton className="btn" digit="." />
      </div>
      <div className="grid-item">
        {" "}
        <EvaluateButton className="btn operation" operation="=" />
      </div>
    </div>
  );
};

export default Body;
