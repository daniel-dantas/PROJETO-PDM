import React from 'react';
import {View} from 'react-native';
import {Container, UpperTitle, Label, Button} from "./styles";

export default function Vinculacao() {


    async function Aprovar() {
    }

    async function Negar() {

    }

    return (
        <Container>
            <UpperTitle>Validar Vínculo</UpperTitle>
            <View>

                {/* Lista */}
                <Button onPress={() => Turma()}> <Label>serie</Label>
                    <Label>professor</Label> </Button>

                <Button onPress={() => Aprovar()}>Aprovar</Button>
                <Button onPress={() => Negar()}>Negar</Button>


            </View>
        </Container>
    )
}