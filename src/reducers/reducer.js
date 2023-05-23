// import { act } from "react-dom/test-utils";
import { incNumber } from "../actions";
import { decNumber } from "../actions";

const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;

    case "DECREMENT":
      return state - 1;

     
    default:
      return state;
  }
};


export default changeTheNumber;