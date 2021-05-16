import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Route from "./src/routes";
import { persistor, store } from "./src/store"
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Route/>
                <StatusBar style="auto"/>
            </PersistGate>
        </Provider>
    );
}
