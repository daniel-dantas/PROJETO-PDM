
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Container, UpperTitle, Input, Label, Button, DeleteButton } from "../CadastrodeUser/styles";
export default function Matricula() {
        
    async function Matricular(){
    }

    return (
        <Container>
        <UpperTitle>Matricular-se</UpperTitle>
        <View>
            {/* {map(subject => (  */}
            <Button onPress={() => Turma(subject)}><Label>serie</Label><Label>Professor</Label></Button>
            <DeleteButton onPress={() => Matricular(subject)}>Apagar</DeleteButton>
            {/* ))} */}
        </View>
        </Container>
    )
}