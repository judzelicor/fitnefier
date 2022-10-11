import { 
    createStore,
    combineReducers
} from "redux";
import {
    userReducer,
    userWorkoutsReducer
} from "../reducers";

export const store = createStore(combineReducers({
    user: userReducer,
    userWorkouts: userWorkoutsReducer
}));