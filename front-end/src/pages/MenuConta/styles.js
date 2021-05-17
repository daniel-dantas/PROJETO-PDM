import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(4,64,88,1);
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  font-style: arial;
`;

export const UpperTitle = styled(Title)`
  padding-bottom: 10px;
  font-size: 35px;
  color: #fff;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding-top: 20px;
  text-align: left;
`;

export const Input = styled.TextInput`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  height: 30px;
  background-color: #D4F1F4;
`;

export const Picker = styled.Picker`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  height: 30px;
  background-color: #D4F1F4;
`;

export const Button = styled.Text`
  color: #000;
  background-color: #75E6DA;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  height: 30px;
  padding-top: 4px;
  width: 170px;
  margin-bottom: 10px;
`;

export const DeleteButton = styled(Button)`
  background-color: #D64545;
`;

export const LogoutButton = styled(Button)`
  background-color: #D4F1F4;
`;
