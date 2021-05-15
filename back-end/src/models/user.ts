import {model, Schema} from "mongoose";

const User = model(
    "User",
    new Schema({
        matricula: {
            unique: true,
            type: Number,
        },
        nome: {
            type: String,
            required: true,
        },
        dataNascimento: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        senha: {
            type: String,
            required: true,
        },
        endereco: {
            type: String,
            required: true,
        },
        ocupacao: {
            type: String,
            required: true,
        },
        typeAccount: {
            type: "Aluno" | "Professor" | "Diretor",
            required: true,
        }
    })
);
export default User;