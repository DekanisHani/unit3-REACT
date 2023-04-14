import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SpotyReducer from "../reducers/SpotyReducer";

const rootReducer = combineReducers({
  home: SpotyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;