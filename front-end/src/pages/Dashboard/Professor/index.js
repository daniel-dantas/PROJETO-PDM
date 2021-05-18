
import React from 'react';
import { View} from 'react-native';

import {useNavigation} from "@react-navigation/native"; 
import { Container, UpperTitle, Label, Button} from "./styles";

export default function DashboardDiretor() {
        
    const navigation = useNavigation();

    async function Turma(){
        navigation.navigate("Turma");
    }

    async function Vincular(){
        navigation.navigate("Vincular");
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