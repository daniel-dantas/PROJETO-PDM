
import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { Container, UpperTitle, Label, Button} from "../CadastrodeUser/styles";
import {useDispatch, useSelector} from "react-redux";
import {matricular, readClass} from "../../store/actions/class";
import {useNavigation} from "@react-navigation/native";
export default function Matricula() {

    const { classList } = useSelector(state => state.Class);

    const navigator = useNavigation();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readClass());
    }, []);


    async function Matricular(id){
        console.log(id);
        dispatch(matricular({ turma: id }, (err) => {
            console.log(err);
            if(!err) navigator.navigate("Aluno");
        }));
    }

    return (
        <Container>
            <UpperTitle>Matricular-se</UpperTitle>
            {classList && classList.length ? (
                <View>
                    {classList.map((item, index) => (
                        <View key={index}>
                            <Button><Label><Text>{"Série: "+item.serie + "ª | "}</Text></Label><Label><Text>{item.descricao}</Text></Label></Button>
                            <Button onPress={() => Matricular(item._id)}><Text>Matricular</Text></Button>
                        </View>
                    ))}
                </View>
            ): (
                <View>
                    <Text>Sem Turmas</Text>
                </View>
            )}
        </Container>
    )
}