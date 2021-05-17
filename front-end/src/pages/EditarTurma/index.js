
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { Container, UpperTitle, Input, Label, Button } from "../CadastrodeUser/styles";
export default function EditarTurma() {


    const [serie, setSerie] = useState("");
    const [descricao, setDescricao] = useState("");



    async function Editar(serie, descricao){
        
    }

    return (
        <Container>
            <UpperTitle>Editar de Turma</UpperTitle>
        <><View>
                <Label>Série:</Label>
                <Input
                    placeholder='Série'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={ serie => setSerie(serie)}
                    value={serie}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <Label>Descrição:</Label>
                <Input
                    placeholder='Descrição'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={ descricao => setDescricao(descricao)}
                    value={descricao}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
                <Label></Label>
                <Button onPress={() => {EditarTurma(serie, descricao).then()}}>Editar</Button>
        </View></>
        </Container>
    )
}