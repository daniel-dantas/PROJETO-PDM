
import React from 'react';
import { View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native"; 

export default function DashboardAluno() {
        
    const navigation = useNavigation();

    async function Turma(){
        navigation.navigate("Turma");
    }

    async function Matricular(){
        navigation.navigate("Matricular");
    }

    return (
        <View>
            {/* Isso é uma lista */}
            <Text>Turma</Text>

            <Text>serie</Text>
            <Text>professor</Text>
          
            <TouchableOpacity><Text>Matricular</Text></TouchableOpacity>
        </View>
    )
}