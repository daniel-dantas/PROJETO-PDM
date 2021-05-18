
import React from 'react';
import { View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"; 
import { Container, UpperTitle, Label, Button, Input, DeleteButton, Picker } from "./styles";

export default function DashboardAluno() {
        
    const navigation = useNavigation();

    async function Turma(){
        navigation.navigate("Turma");
    }

    async function Matricular(){
        navigation.navigate("Matricular");
    }

    return (
        <Container>
            <UpperTitle>Turmas</UpperTitle>
        <View>
            {/* Isso é uma lista */}
            <Button onPress={() => {Turma()}}>
            <Label>Turma, série</Label>
            <Label>professor</Label>
            </Button>

            <Label></Label>
            <Button onPress={() => {Matricular()}}>Matricular</Button>
            
        </View>
        </Container>
    )
}