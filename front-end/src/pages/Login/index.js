import React, {useState} from "react";
import {Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import { Container, UpperTitle, Input, Label, Button } from "../CadastrodeUser/styles";

export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <Container>
            <UpperTitle>Login</UpperTitle>
        <View>
            
            <Label>Email:</Label>
            <Input placeholder="Email" value={email} onChangeText={email => setEmail(email)}/>
            
            <Label>Senha:</Label>
            <Input placeholder="Senha" value={senha} onChangeText={senha => setSenha(senha)}/><br></br><br></br>
            <TouchableOpacity><Button>Entrar</Button></TouchableOpacity><br></br>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}><Button>Cadastrar-se</Button></TouchableOpacity>
        </View>
        </Container>
    );
}