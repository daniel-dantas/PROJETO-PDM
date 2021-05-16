

import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

function persistReducers(reducers) {
    const persistedReducers = persistReducer(
        {
            key: "root",
            storage: AsyncStorage,
            whitelist: ["user"]
        },
        reducers
    );

    return persistedReducers;
}

export default persistReducers;
