
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
export default function MenuUsuario() {


    const {user, logout} = useAuth();
    function Excluir(){};

    function Editar() {
        Navigation.navigate("Cadastro");
    };     
   
    
    return (
        <><View>
            <Text>{user.name}</Text>
            <TouchableOpacity onPress={() => Excluir()}><Text>Excluir Conta</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Editar()}><Text>Editar Conta</Text></TouchableOpacity>
            <TouchableOpacity onPress={() =>  Logout()}><Text>Logout</Text></TouchableOpacity>

        </View></>
    )
}