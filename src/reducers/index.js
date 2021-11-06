import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import commentsReducers from "reducers/comments";
import userAuth from "reducers/auth";

const rootReducers = combineReducers({
  comments: commentsReducers,
  auth: userAuth,
});

export const store = createStore(rootReducers, applyMiddleware(reduxPromise));
