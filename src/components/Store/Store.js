import { createStore, combineReducers} from "redux";
import { cartReducer } from "./cartReducer";

const rootReducers = combineReducers({
    cart: cartReducer,
})

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());