
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { Container, UpperTitle, Input, Label, Button } from "../CadastrodeUser/styles";
export default function Turma() {




    return (
        <Container>
            <UpperTitle>Turma</UpperTitle>
        <><View>

            <Label>serie</Label>
            <Label>Professor: professor</Label>
            {/* {map(subject => (  */}
            <Label>nome</Label>
            <Label>matricula</Label>      

        </View></>
        </Container>
    )
}