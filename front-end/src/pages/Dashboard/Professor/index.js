
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"; 

export default function DashboardDiretor() {
        
    const navigation = useNavigation();

    async function Turma(){
        Navigation.navigate("Turma");
    }

    async function Vincular(){
        Navigation.navigate("Vincular");
    }

    return (
        <View>
            <Text>Turmas Vinculadas</Text>
        {map(subject => ( 
           <TouchableOpacity onPress={() => Turma(subject)}> <Info>serie</Info>,
            <Info>professor</Info> </TouchableOpacity>
             ))}
          
            <TouchableOpacity onPress={() => {Vincular()}} ><Text>Matricular</Text></TouchableOpacity>
        </View>
    )
}