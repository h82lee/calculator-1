import { combineReducers } from "redux";
import { create, all } from "mathjs";

const config = {
  epsilon: 1e-12,
  matrix: "Matrix",
  number: "number",
  precision: 64,
  predictable: false,
  randomSeed: null,
};
const math = create(all, config);

const outputReducer = (output = "", action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      if (action.payload === "0" && output === "0") return output;
      if (action.payload === "." && output.includes(".")) return output;
      else return `${output || ""}${action.payload}`;
    case "CLEAR":
      return null;
    case "CHOOSE_OPERATION":
      if (!output) return null;
      return `${output || ""}${action.payload}`;
    case "DELETE_DIGIT":
      if (!output) {
        return "";
      }
      return output.slice(0, -1);
    case "EVALUATE":
      if (!output) return "";
      else {
        let ans = math.evaluate(output);
        return ans.toString();
      }
    case "CONVERT":
      const operations = ["+", "-", "*", "/"];
      if (!output) return "";
      if (operations.some((el) => output.includes(el))) {
        if (operations.includes(output[output.length - 1])) return output;
        let lastNum = output.match(/\d+(?=\D*$)/);
        let convertedLast = -lastNum;
        let upToLast = output.replace(/\d+$/, "");
        return `${upToLast}${convertedLast}`;
      }
      return -output;
    default:
      return output;
  }
};

export default combineReducers({
  output: outputReducer,
});
