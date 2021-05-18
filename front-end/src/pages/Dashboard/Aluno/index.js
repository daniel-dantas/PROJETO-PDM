import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";
import {Container, UpperTitle, Label, Button, Input, DeleteButton, Picker} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {logout, refresh} from "../../../store/actions/user";

export default function DashboardAluno() {

    const dispatch = useDispatch();

    const {user} = useSelector(state => state.user);

    const navigation = useNavigation();

    useEffect(() => {
        dispatch(refresh())
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    async function Turma() {
        // navigation.navigate("Turma");
    }

    async function Matricular() {
        navigation.navigate("Matricular");
    }

    return (
        <Container>
            <UpperTitle>Turma</UpperTitle>
            <Button onPress={() => dispatch(logout())}>Logout</Button>
            <View>
                {user.turma ? (
                    <>
                        <Button onPress={() => {
                            Turma()
                        }}>
                            <Label>Serie: {user.turma.serie} ª | </Label>
                            <Label>{user.turma.descricao}</Label>
                        </Button>
                        <View style={{
                            backgroundColor: "#75E6DA"
                        }}>
                            <Text style={{color: "#fff"}}>Professor: {user.turma.professor}</Text>
                        </View>
                    </>
                ) : (
                    <>
                        <Text>Sem Matricula</Text>
                    </>

                )}
                <Label></Label>
                <Button onPress={() => {
                    Matricular()
                }}>Matricular</Button>
            </View>
        </Container>
    )
}