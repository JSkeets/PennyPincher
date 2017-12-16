// import { createStore, applyMiddleware } from "redux";
// import RootReducer from "../reducers/root_reducer";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { loadState, saveState } from "./localStorage";

// const persistedState = loadState();

// const configureStore =
// 	createStore(
// 		RootReducer,
// 		persistedState,
// 		composeWithDevTools(applyMiddleware(thunk, logger))
// 	);
// configureStore.subscribe(() => {
// 	saveState(configureStore.getState());
// });
// export default configureStore;
import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

export default configureStore;
