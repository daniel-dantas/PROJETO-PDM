
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
        <Container>
            <UpperTitle>Turmas</UpperTitle>
        <View>
        
            {/* Lista */}
            <Button onPress={() => Turma(subject)}><Label>serie</Label><Label>professor</Label></Button>
            <Button onPress={() => EditarTurma(subject)}>Editar</Button>
            <Button onPress={() => ApagarTurma(subject)}>Apagar</Button>
            
          
            <Button onPress={() => {Validar()}}>Validar</Button>
            <Button onPress={() => {CriarTurma()}}>Criar Turma</Button>
        </View>
        </Container>
    )
}