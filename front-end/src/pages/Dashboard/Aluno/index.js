
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"; 

export default function DashboardAluno() {
        
    const navigation = useNavigation();

    async function Turma(){
        Navigation.navigate("Turma");
    }

    async function Matricular(){
        Navigation.navigate("Matricular");
    }

    return (
        <View>
            <Text>Turma</Text>
        {map(subject => ( 
           <TouchableOpacity onPress={() => Turma(subject)}> <Info>serie</Info>,
            <Info>professor</Info> </TouchableOpacity>
             ))}
          
            <TouchableOpacity onPress={() => {Matricular()}} ><Text>Matricular</Text></TouchableOpacity>
        </View>
    )
}