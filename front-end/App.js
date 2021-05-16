import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Route from "./src/routes";

export default function App() {
    return (
        <>
            <Route/>
            <StatusBar style="auto"/>
        </>
    );
}
