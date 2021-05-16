
import React, {useState} from 'react';
import { View, Text, InputText, Button } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
export default function CadastroTurma() {


    const [serie, setSerie] = useState("");
    const [descricao, setDescricao] = useState("");



    async function CadastroTurma(serie, descricao){
        
    }
    return (
        <><View>
            <Text>Cadastro de Usuario</Text>

            <TextInput
                    placeholder='Série'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={ serie => setSerie(serie)}
                    value={serie}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Descrição'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={ descricao => setDescricao(descricao)}
                    value={descricao}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <Button onPress={() => {CadastroTurma(serie, email)}} >Cadastrar</Button>
        </View></>
    )
}