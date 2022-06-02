const itemDefaultState = {
  cartElems: [],
};

export const itemReducer = (state = itemDefaultState, action) => {
    console.log(action)
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartElems: [...state.cartElems, action.payload] };
    default:
      return state;
  }
};
