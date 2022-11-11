export const addDigit = (digit) => {
  return {
    type: "ADD_DIGIT",
    payload: digit,
  };
};

export const addOperation = (operation) => {
  return {
    type: "CHOOSE_OPERATION",
    payload: operation,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};

export const deleteDigit = () => {
  return {
    type: "DELETE_DIGIT",
  };
};

export const evaluate = () => {
  return {
    type: "EVALUATE",
  };
};

export const convert = () => {
  return {
    type: "CONVERT",
  };
};
