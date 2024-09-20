import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
    authReducer,
    profileReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store