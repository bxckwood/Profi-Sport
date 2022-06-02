import { createStore, combineReducers} from "redux";
import { cartReducer } from "./cartReducer";

const rootReducers = combineReducers({
    cart: cartReducer,
})

export const store = createStore(rootReducers);