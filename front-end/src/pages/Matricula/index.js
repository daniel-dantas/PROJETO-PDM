
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default function Matricula() {
        


    async function Matricular(){
    }

    return (
        <View>
            <Text>Matricula-se</Text>
        {map(subject => ( 
           <TouchableOpacity onPress={() => Turma(subject)}> <Info>serie</Info>,
            <Info>professor</Info> </TouchableOpacity>,
            <TouchableOpacity onPress={() => Matricular(subject)}><Info>Apagar</Info></TouchableOpacity>
            ))}
        </View>
    )
}