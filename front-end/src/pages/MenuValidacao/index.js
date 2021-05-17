
import React, {useState} from 'react';
import { View, Text, TouchableOpacit } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";
import { Container, UpperTitle, Button, DeleteButton, LogoutButton } from "./styles";

export default function MenuValidacao() {


    const navigation = useNavigation();


    // const {user, logout} = useAuth();
    function ValidarVinculo(){
        Navigation.navigate("Vinculacao");

    };

    function ValidarMatricula() {
        Navigation.navigate("Matriculas");
    };     
   
    
    return (
        <Container>
        <><View>
            <Button onPress={() => ValidarVinculo()}>Validar Vinculo de Professor</Button>
            <Button onPress={() => ValidarMatricula()}>Validar Matrícula de Alunos</Button>
        </View></>
        </Container>
    )
}