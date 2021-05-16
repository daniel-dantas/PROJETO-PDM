import React, {useState} from "react";
import {Text, View} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-gesture-handler";

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" value={email} onChangeText={email => setEmail(email)}/>
            <TextInput placeholder="Senha" value={senha} onChangeText={senha => setSenha(senha)}/>
            <TouchableOpacity><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity><Text>Cadastrar-se</Text></TouchableOpacity>
        </View>
    );
}