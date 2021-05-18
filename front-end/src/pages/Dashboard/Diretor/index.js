
import React from 'react';
import { View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { Container, UpperTitle, Label, Button} from "./styles";

export default function DashboardDiretor() {
        
    const navigation = useNavigation();

    async function Turma(){
        navigation.navigate("Turma");
    }
    async function EditarTurma(){
        navigation.navigate("EditarTurma");
    }
    async function ApagarTurma(){
    }
    async function Validar(){
        navigation.navigate("MenuValidar");
    }
    async function CriarTurma(){
        navigation.navigate("CadastroTurma");
    }
    return (
        <Container>
            <UpperTitle>Turmas</UpperTitle>
        <View>
        
            {/* Lista */}
            <Button onPress={() => Turma()}><Label>serie</Label><Label>professor</Label></Button>
            <Button onPress={() => EditarTurma()}>Editar</Button>
            <Button onPress={() => ApagarTurma()}>Apagar</Button>
            
          
            <Button onPress={() => {Validar()}}>Validar</Button>
            <Button onPress={() => {CriarTurma()}}>Criar Turma</Button>
        </View>
        </Container>
    )
}