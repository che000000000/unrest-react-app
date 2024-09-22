import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import signInReducer from "./reducers/singInReducer";
import signUpReducer from "./reducers/signUpReducer";

const reducers = combineReducers({
    signInReducer,
    signUpReducer,
    profileReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store