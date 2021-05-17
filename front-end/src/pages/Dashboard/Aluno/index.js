
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"; 

export default function DashboardAluno() {
        
    const navigation = useNavigation();

    async function Turma(){
        navigation.navigate("Turma");
    }

    async function Matricular(){
        navigation.navigate("Matricular");
    }

    return (
        <View>
            <Text>Turma</Text>

            <Text>serie</Text>,
            <Text>professor</Text>
          
            <TouchableOpacity><Text>Matricular</Text></TouchableOpacity>
        </View>
    )
}