import { createStore } from "redux";
import { itemReducer } from "./ItemReducer";

export const store = createStore(itemReducer);