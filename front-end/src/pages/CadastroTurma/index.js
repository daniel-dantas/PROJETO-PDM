
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Container, UpperTitle, Input, Label, Button } from "../CadastrodeUser/styles";
export default function CadastroTurma() {


    const [serie, setSerie] = useState("");
    const [descricao, setDescricao] = useState("");



    async function CadastroTurma(serie, descricao){
        
    }

    return (
        <Container>
            <UpperTitle>Cadastro de Turma</UpperTitle>
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
                <Button onPress={() => {CadastroTurma(serie, descricao).then()}}>Cadastrar</Button>
        </View></>
        </Container>
    )
}