import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, UpperTitle, Button, DeleteButton, LogoutButton } from "./styles";
import {useNavigation} from '@react-navigation/native'

export default function MenuUsuario() {

    const Navigation = useNavigation();

    //const {user, logout} = useAuth();
    function Excluir(){};

    function Editar() {
        Navigation.navigate("Cadastro");
    };
    function Logout() {
        Navigation.navigate("Login");
    };      
   
    
    return (
        <Container>
            <UpperTitle>Nome</UpperTitle>
        <><View>
            
            <DeleteButton onPress={() => Excluir()}>Excluir Conta</DeleteButton>
            <Button onPress={() => Editar()}>Editar Conta</Button>
            <LogoutButton onPress={() =>  Logout()}>Logout</LogoutButton>

        </View></>
        </Container>
    )
}