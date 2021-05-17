
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
export default function EditarTurma() {


    const [serie, setSerie] = useState("");
    const [descricao, setDescricao] = useState("");



    async function Editar(serie, descricao){
        
    }

    return (
        <><View>
            <Text>Editar de Turma</Text>

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

                <TouchableOpacity onPress={() => {EditarTurma(serie, descricao).then()}} ><Text>Editar</Text></TouchableOpacity>
        </View></>
    )
}