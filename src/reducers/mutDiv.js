// import { act } from "react-dom/test-utils";
import { multNumber } from "../actions";
import { devNumber } from "../actions";

const initialState = 5;

const multTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "MULTIPLICATION":
      return state * action.payload;

    case "DIVISION":
      return state / 5;

     
    default:
      return state;
  }
};


export default multTheNumber;