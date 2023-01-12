import {combineReducers, configureStore} from "@reduxjs/toolkit";
import errorReducer from "./errors";
import calcReducer from "./calculate";
import requestReducer from "./request";

const rootReducer = combineReducers({
    calc: calcReducer,
    errors: errorReducer,
    request: requestReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}

