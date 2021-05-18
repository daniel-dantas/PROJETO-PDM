
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import { Container, UpperTitle, Label, Button, Input, DeleteButton, Picker } from "./styles";

export default function Vinculacao() {
        

    async function Aprovar(){
    }
    async function Negar(){

        }

    return (
        <Container>
        <UpperTitle>Validar Vínculo</UpperTitle>
        <View>
            
            {/* Lista */}
            <Button onPress={() => Turma(subject)}> <Label>serie</Label>
            <Label>professor</Label> </Button>

            <Button onPress={() => Aprovar(subject)}>Aprovar</Button>
            <Button onPress={() => Negar(subject)}>Negar</Button>
        
        
        </View>
        </Container>
    )
}