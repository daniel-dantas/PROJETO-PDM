
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import {RectButton, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
export default function CadastroUser() {


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [datanascimento, setDatanascimento] = useState('');
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState('');


    async function CadastroUsuario(nome, datanascimento, endereco, email, senha){
        
    }
    return (
        <View>
            <Text>Cadastro de Usuario</Text>

            <TextInput
                placeholder='Nome'
                placeholderTextColor="#aaaaaa"
                onChangeText={ nome => setNome(nome)}
                value={nome}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='Data de Nascimento'
                placeholderTextColor="#aaaaaa"
                onChangeText={ datanascimento => setDatanascimento(datanascimento)}
                value={datanascimento}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='Endereço'
                placeholderTextColor="#aaaaaa"
                onChangeText={ endereco => setEndereco(endereco)}
                value={endereco}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={ email => setEmail(email)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='Senha'
                placeholderTextColor="#aaaaaa"
                onChangeText={ senha => setSenha(senha)}
                value={senha}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TouchableOpacity onPress={() => {CadastroUsuario(nome, datanascimento, endereco, email, senha)}} ><Text>Cadastrar</Text></TouchableOpacity>
        </View>
    )
}