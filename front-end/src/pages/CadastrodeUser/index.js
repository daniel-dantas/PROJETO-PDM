
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { Container, UpperTitle, Input, Label, Picker, Button } from './styles';
import {useDispatch} from "react-redux";
import {register} from "../../store/actions/user";
import {useNavigation} from "@react-navigation/native";
export default function CadastroUser() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [datanascimento, setDatanascimento] = useState('');
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState('');
    const [type, setType] = useState("Aluno");
    const [titulo, setTitulo] = useState("");

    const navigation = useNavigation();
    const dispatch = useDispatch();

    async function CadastroUsuario(){
        dispatch(register({nome, dataNascimento: datanascimento, senha, endereco, email, type, titulo}, (err, response) => {
            if(err) alert("Error in register");
            if(!err) navigation.navigate("Login");
        }))
        alert(type);
    }
    return (
        <Container>
            <UpperTitle>Cadastro</UpperTitle>
        <View>
            
            <Label>Nome:</Label>
            <Input
                placeholder='Nome'
                placeholderTextColor="#aaaaaa"
                onChangeText={ nome => setNome(nome)}
                value={nome}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <Label>Data de Nascimento:</Label>
            <Input
                placeholder='Data de Nascimento'
                placeholderTextColor="#aaaaaa"
                onChangeText={ datanascimento => setDatanascimento(datanascimento)}
                value={datanascimento}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <Label>Endereço:</Label>
            <Input
                placeholder='Endereço'
                placeholderTextColor="#aaaaaa"
                onChangeText={ endereco => setEndereco(endereco)}
                value={endereco}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <Label>Email:</Label>
            <Input
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={ email => setEmail(email)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <Label>Senha:</Label>
            <Input
                placeholder='Senha'
                placeholderTextColor="#aaaaaa"
                onChangeText={ senha => setSenha(senha)}
                value={senha}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <Label>Ocupação:</Label>
            <Picker selectedValue={type} onValueChange={(value, itemIndex) => setType(value)}>
                <Picker.Item label="Aluno" value="Aluno"/>
                <Picker.Item label="Professor" value="Professor"/>
                <Picker.Item label="Diretor" value="Diretor"/>
            </Picker>

            {type === "Professor" && (
                <Input
                    placeholder='Titulo'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={ titulo => setTitulo(titulo)}
                    value={titulo}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
            )}
            <Label></Label>
            <TouchableOpacity onPress={CadastroUsuario} ><Button>Cadastrar</Button></TouchableOpacity>
        </View>
        </Container>
    )
}