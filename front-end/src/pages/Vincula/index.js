
import React, {useState} from 'react';
import { View } from 'react-native';
import { Container, UpperTitle, Label, Button, DeleteButton } from "./styles";

export default function Vincula() {
        


    async function Vincular(){
    }

    return (
        <Container>
            <UpperTitle>Turmas sem Vinculo</UpperTitle>
        <><View>
            
            <Button onPress={() => Turma(subject)}><Label>serie, </Label>
            <Label>professor</Label></Button>

            <Label></Label>    
            <DeleteButton onPress={() => Vincular(subject)}><Label>Apagar</Label></DeleteButton>
        
        </View>
        </>
        </Container>
    )
}