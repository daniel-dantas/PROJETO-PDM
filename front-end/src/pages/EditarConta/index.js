
import React, {useState} from 'react';
import { View, Text, Picker } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
export default function EditarUser() {
    const {user} = useAuth();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [datanascimento, setDatanascimento] = useState('');
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState('');
    const [type, setType] = useState("Aluno");
    const [titulo, setTitulo] = useState("");

    async function EditarUsuario(nome, datanascimento, endereco, email, senha, type){
        alert(type);
    }
    return (
        <View>
            <Text>Editar Usuario</Text>

            <TextInput
                placeholder='Nome'
                placeholderTextColor="#aaaaaa"
                onChangeText={ nome => setNome(nome)}
                value={user.nome}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='Data de Nascimento'
                placeholderTextColor="#aaaaaa"
                onChangeText={ datanascimento => setDatanascimento(datanascimento)}
                value={user.datanascimento}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='Endereço'
                placeholderTextColor="#aaaaaa"
                onChangeText={ endereco => setEndereco(endereco)}
                value={user.endereco}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={ email => setEmail(email)}
                value={user.email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholder='Senha'
                placeholderTextColor="#aaaaaa"
                onChangeText={ senha => setSenha(senha)}
                value={user.senha}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <Picker selectedValue={user.type} onValueChange={(value, itemIndex) => setType(value)}>
                <Picker.Item label="Aluno" value="Aluno"/>
                <Picker.Item label="Professor" value="Professor"/>
                <Picker.Item label="Diretor" value="Diretor"/>
            </Picker>

            {type === "Professor" && (
                <TextInput
                    placeholder='Titulo'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={ titulo => setTitulo(titulo)}
                    value={user.titulo}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
            )}

            <TouchableOpacity onPress={() => {EditarUsuario(nome, datanascimento, endereco, email, senha, type)}} ><Text>Editar</Text></TouchableOpacity>
        </View>
    )
}