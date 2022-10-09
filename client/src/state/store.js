import { 
    createStore,
    combineReducers
} from "redux";
import {
    userReducer
} from "../reducers";

export const store = createStore(combineReducers({
    user: userReducer
}));