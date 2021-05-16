import {applyMiddleware, compose, createStore} from "redux";
import Thunk from 'redux-thunk';
import persistReducers from "./persistReducers";
import reducers from "./reducers";
import {persistStore} from "redux-persist";

const middlaware = [Thunk];

const store = createStore(
    persistReducers(reducers),
    compose(applyMiddleware(...middlaware))
)
const persistor = persistStore(store);

export { store, persistor };