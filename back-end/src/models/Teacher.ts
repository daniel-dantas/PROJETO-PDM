import {model, Schema} from "mongoose";
import {ITeacher} from "../interfaces";

const Teacher = model<ITeacher>(
    "Teacher",
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
        titulo: {
            type: String,
            required: true
        }
    })
);
export default Teacher;