import React, {useState} from "react";
import {Text, View} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";

export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" value={email} onChangeText={email => setEmail(email)}/>
            <TextInput placeholder="Senha" value={senha} onChangeText={senha => setSenha(senha)}/>
            <TouchableOpacity><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}><Text>Cadastrar-se</Text></TouchableOpacity>
        </View>
    );
}