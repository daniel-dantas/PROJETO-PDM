
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"; 

export default function DashboardDiretor() {
        
    const navigation = useNavigation();

    async function Turma(){
        Navigation.navigate("Turma");
    }
    async function EditarTurma(){
        Navigation.navigate("EditarTurma");
    }
    async function ApagarTurma(){
    }
    async function Validar(){
        Navigation.navigate("MenuValidar");
    }
    async function CriarTurma(){
        Navigation.navigate("CadastroTurma");
    }
    return (
        <View>
            <Text>Turmas</Text>
        {map(subject => ( 
           <TouchableOpacity onPress={() => Turma(subject)}> <Info>serie</Info>,
            <Info>professor</Info> </TouchableOpacity>,
            <TouchableOpacity onPress={() => EditarTurma(subject)}><Info>Editar</Info></TouchableOpacity>,
            <TouchableOpacity onPress={() => ApagarTurma(subject)}><Info>Apagar</Info></TouchableOpacity>
            ))}
          
          <TouchableOpacity onPress={() => {Validar()}} ><Text>Validar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {CriarTurma()}} ><Text>Criar Turma</Text></TouchableOpacity>
        </View>
    )
}