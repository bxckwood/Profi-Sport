import { createReducer } from "@reduxjs/toolkit";
import simulators from "../simulator.json";

const itemDefaultState = {
  cartElems: [],
};

/* export const cartReducer = createReducer([], (builder) => {
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
      return {
        ...state,
        cartElems: [...state.cartElems, { count: 1, action: action.payload }],
      };
    case "ADD_COUNT":
      const index1 = state.cartElems.indexOf(action.payload)
      const bebra = state.cartElems[index1].count
      return {
        ...state, cartElems: [...state.cartElems.slice(0,index1), {count: bebra + 1 , action: action.payload}, ...state.cartElems.slice(index1+1,state.cartElems.length + 1)]
      }
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        cartElems: [],
      };
    case "REMOVE_ITEM":
      const index2 = state.cartElems.indexOf(action.payload)
      const bebra3 = state.cartElems[index2].count
      if (bebra3 > 1) {
        return {
          ...state, cartElems: [...state.cartElems.slice(0,index2), {count: bebra3 - 1 , action: action.payload}, ...state.cartElems.slice(index2+1,state.cartElems.length + 1)]
        }
      } else {
        return {
          ...state, cartElems: [...state.cartElems.slice(0,index2),...state.cartElems.slice(index2+1,state.cartElems.length + 1)]
        }
      }
    default:
      return state;
  }
};
