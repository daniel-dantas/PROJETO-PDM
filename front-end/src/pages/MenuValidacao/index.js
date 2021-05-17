
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";

export default function MenuValidacao() {


    const navigation = useNavigation();


    const {user, logout} = useAuth();
    function ValidarVinculo(){
        Navigation.navigate("Vinculacao");

    };

    function ValidarMatricula() {
        Navigation.navigate("Matriculas");
    };     
   
    
    return (
        <><View>
            <TouchableOpacity onPress={() => ValidarVinculo()}><Text>Validar Vinculo de Professor</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => ValidarMatricula()}><Text>Validar Matrícula de Alunos</Text></TouchableOpacity>
        </View></>
    )
}