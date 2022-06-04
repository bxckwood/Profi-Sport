import { createReducer } from "@reduxjs/toolkit";
import simulators from "../simulator.json";

const itemDefaultState = {
  cartElems: [],
};


/* xport const cartReducer = createReducer([], (builder) => {
  builder.addCase("ADD_ITEM", (state, action) => {
    if (state.includes({count: 1, action: action.payload.payload})) {
      const index = state.findIndex(
        (elem) => console.log(elem)
      );
      state[index].count = state[index].count + 1;
    } else {
      state.push({count: 1, action: action.payload})
    }
  });
}); */

export const cartReducer = (state = itemDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.cartElems.includes(action.payload)) {
        const index = state.cartElems.findIndex(
          (elem) => elem === action.payload
        );
        state.cartElems[index].count = state.cartElems[index].count + 1;
        return { ...state };
      } else {
        return {
          ...state,
          cartElems: [...state.cartElems, { count: 1, action: action.payload }],
        };
      }
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        cartElems: [],
      };
    case "REMOVE_ITEM":
      const index = state.cartElems.findIndex(
        (elem) => elem === action.payload
      );
      state.cartElems[index].count = state.cartElems[index].count - 1;
      return { ...state };
    default:
      return state;
  }
}; 

