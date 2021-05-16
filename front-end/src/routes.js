import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from "./pages/CadastrodeUser"
import CadastroTurma from "./pages/CadastroTurma";
import Login from "./pages/Login";
import MenuConta from "./pages/MenuConta"

const Stack = createStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="CadastroTurma" component={CadastroTurma} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="MenuConta" component={MenuConta} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;