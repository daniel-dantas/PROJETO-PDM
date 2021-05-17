
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default function Vincula() {
        


    async function Vincular(){
    }

    return (
        <View>
            <Text>Turmas sem Vinculo</Text>
        {map(subject => ( 
           <TouchableOpacity onPress={() => Turma(subject)}> <Info>serie</Info>,
            <Info>professor</Info> </TouchableOpacity>,
            <TouchableOpacity onPress={() => Vincular(subject)}><Info>Apagar</Info></TouchableOpacity>
            ))}
        </View>
    )
}