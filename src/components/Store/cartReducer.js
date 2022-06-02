import simulators from "../simulator.json";

const itemDefaultState = {
  cartElems: [],
};

export const cartReducer = (state = itemDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartElems: [...state.cartElems, action.payload] }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartElems: state.cartElems.filter((elem) => elem.id !== action.payload)
      }
    default:
      return state
  }
}
