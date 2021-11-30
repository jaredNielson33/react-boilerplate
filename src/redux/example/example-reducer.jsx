import { ExampleActionTypes } from "./example.types";
import { exampleAddItem } from "./example.utils";

const INITIAL_STATE = {
  exampleItems: [],
};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case ExampleActionTypes.EXAMPLE_ADD_ITEM:
        return {
          ...state,
          cartItems: exampleAddItem(state.exampleItems, action.payload),
        };
    default:
      return state;
  }
};

export default exampleReducer;