import React, {useState} from "react";
import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Container, UpperTitle, Input, Label, Button } from "../CadastrodeUser/styles";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/user";

export default function Login() {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function autenticar(){
        dispatch(login({email, senha}, (err, result) => {
            console.log(err);
            if(err) alert("Falha de autenticação!");
            // else navigation.navigate("");
        }));
    }

    return (
        <Container>
            <UpperTitle>Login</UpperTitle>
        <View>
            
            <Label>Email:</Label>
            <Input placeholder="Email" value={email} onChangeText={email => setEmail(email)}/>
            
            <Label>Senha:</Label>
            <Input placeholder="Senha" value={senha} onChangeText={senha => setSenha(senha)}/>
            
            <Label></Label>
            <Button onPress={() => autenticar()}>Entrar</Button>
            <Label></Label>
            <Button onPress={() => navigation.navigate("Cadastro")}>Cadastrar-se</Button>
        </View>
        </Container>
    );
}