
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Container, UpperTitle, Input, Label, Button } from "../CadastrodeUser/styles";
import {useDispatch} from "react-redux";
import {createClass} from "../../store/actions/class";
import {useNavigation} from "@react-navigation/native";
export default function CadastroTurma() {


    const navigator = useNavigation();

    const dispatch = useDispatch();

    const [serie, setSerie] = useState("");
    const [descricao, setDescricao] = useState("");
    const [professor, setProfessor] = useState("");


    async function CadastroTurma(serie, descricao, professor){
        dispatch(createClass({serie, descricao, professor}, (err, result) => {
            if(!err) navigator.navigate("Diretor");
        }));
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

                <Label>Professor:</Label>
                <Input
                    placeholder='Professor'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={ professor => setProfessor(professor)}
                    value={professor}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <Label></Label>
                <Button onPress={() => {CadastroTurma(serie, descricao, professor).then()}}>Cadastrar</Button>
        </View></>
        </Container>
    )
}