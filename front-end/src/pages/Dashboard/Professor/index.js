
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"; 
import { Container, UpperTitle, Label, Button, Input, DeleteButton, Picker } from "./styles";

export default function DashboardDiretor() {
        
    const navigation = useNavigation();

    async function Turma(){
        Navigation.navigate("Turma");
    }

    async function Vincular(){
        Navigation.navigate("Vincular");
    }

    return (
        <Container>
            <UpperTitle>Turmas Vinculadas</UpperTitle>
        <View>
            {/* Lista */}
            <Button onPress={() => Turma(subject)}> <Label>serie</Label>
            <Label>professor</Label></Button>
            
          
            <Button onPress={() => {Vincular()}} >Vincular</Button>
        </View>
        </Container>
    )
}