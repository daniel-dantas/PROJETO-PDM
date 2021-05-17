
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { Container, UpperTitle, Input, Label, Button, DeleteButton } from "../CadastrodeUser/styles";

export default function Matriculas() {
        

    async function Aprovar(){
    }
    async function Negar(){

        }

    return (
        <Container>
        <UpperTitle>Validar Matrícula</UpperTitle>
        <><View>
            <Button onPress={() => Turma(subject)}><Label>serie</Label><Label>professor</Label></Button>
            <Button onPress={() => Aprovar(subject)}>Aprovar</Button>
            <DeleteButton onPress={() => Negar(subject)}>Negar</DeleteButton>    
        </View></>
        </Container>
    )
}