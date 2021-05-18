import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// Telas
import Cadastro from "./pages/CadastrodeUser"
import CadastroTurma from "./pages/CadastroTurma";
import Login from "./pages/Login";
import MenuConta from "./pages/MenuConta";
import EditarConta from "./pages/EditarConta"
import EditarTurma from "./pages/EditarTurma";
import Turma from "./pages/Turma";
import Matricular from "./pages/Matricula";
import Vincular from "./pages/Vincula"
import Aluno from "./pages/Dashboard/Aluno";
import Professor from "./pages/Dashboard/Professor";
import Diretor from "./pages/Dashboard/Diretor";
import MenuValidar from "./pages/MenuValidacao";
import Matriculas from "./pages/Matriculas";
import Vinculacao from "./pages/Vinculacao";
import {useDispatch, useSelector} from "react-redux";
import {refresh} from "./store/actions/user";

const Stack = createStackNavigator();

const Route = () => {

    const dispatch = useDispatch();

    const { user, token } = useSelector(state => state.user);

    useEffect(() => {
        setTimeout(() => {
            console.log("atualizado");
            dispatch(refresh());
        }, 2000);
    }, [token]);

    return (
        <NavigationContainer>
            {!token ? (
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Cadastro" component={Cadastro} options={{
                        headerShown: false
                    }} />
                </Stack.Navigator>
            ) : (
                user.matricula[0] === "A" ? (
                    <Stack.Navigator>
                        <Stack.Screen name="Aluno" component={Aluno} options={{
                            headerShown: false
                        }} />
                        <Stack.Screen name="MenuConta" component={MenuConta} options={{
                            headerShown: false
                        }} />
                        <Stack.Screen name="EditarConta" component={EditarConta} options={{
                            headerShown: false
                        }} />
                        <Stack.Screen name="Matricular" component={Matricular} options={{
                            headerShown: false
                        }} />
                        <Stack.Screen name="Turma" component={Turma} options={{
                            headerShown: false
                        }} />
                    </Stack.Navigator>
                    ) : (user.matricula[0]) === "P" ? (
                        <Stack.Navigator>
                            <Stack.Screen name="Professor" component={Professor} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="MenuConta" component={MenuConta} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="EditarConta" component={EditarConta} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="Vincular" component={Vincular} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="Vinculacao" component={Vinculacao} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="Turma" component={Turma} options={{
                                headerShown: false
                            }} />
                        </Stack.Navigator>
                    ) : (
                        <Stack.Navigator>
                            <Stack.Screen name="Diretor" component={Diretor} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="MenuConta" component={MenuConta} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="CadastroTurma" component={CadastroTurma} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="MenuValidar" component={MenuValidar} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="EditarTurma" component={EditarTurma} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="EditarConta" component={EditarConta} options={{
                                headerShown: false
                            }} />
                            <Stack.Screen name="Turma" component={Turma} options={{
                                headerShown: false
                            }} />
                        </Stack.Navigator>
                    )
            )}
        </NavigationContainer>
    )
}

export default Route;