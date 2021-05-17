
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default function Matriculas() {
        

    async function Aprovar(){
    }
    async function Negar(){

        }

    return (
        <View>
            <Text>Validar Matrícula</Text>
        {map(subject => ( 
           <TouchableOpacity onPress={() => Turma(subject)}> <Info>serie</Info>,
            <Info>professor</Info> </TouchableOpacity>,
            <TouchableOpacity onPress={() => Aprovar(subject)}><Info>Aprovar</Info></TouchableOpacity>,
            <TouchableOpacity onPress={() => Negar(subject)}><Info>Negar</Info></TouchableOpacity>
            ))}
        
        </View>
    )
}