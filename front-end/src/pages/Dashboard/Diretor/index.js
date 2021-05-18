
import React, {useEffect} from 'react';
import { View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { Container, UpperTitle, Label, Button} from "./styles";
import {logout, refresh} from "../../../store/actions/user";
import {useDispatch, useSelector} from "react-redux";

export default function DashboardDiretor() {
        
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(refresh())
    }, []);



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
            <Button onPress={() => dispatch(logout())}>Logout</Button>
        <View>
        
            {/* Lista */}

            {user.turmas.map(turma => (
                <View style={{margin: "20px"}}>
                    <Button onPress={() => Turma()}><Label>Serie: {turma.serie}</Label>
                        <br /><Label>Descrição: {turma.descricao}</Label><br/><Label>Professor: {turma.professor}</Label></Button>
                    {/*<Button style={{marginTop: "10px"}} onPress={() => EditarTurma()}>Editar</Button>*/}
                    {/*<Button onPress={() => ApagarTurma()}>Apagar</Button>*/}
                </View>
            ))}

            {/*<Button onPress={() => {Validar()}}>Validar</Button>*/}
            <Button style={{marginTop: "40px"}} onPress={() => {CriarTurma()}}>Criar Turma</Button>
        </View>
        </Container>
    )
}