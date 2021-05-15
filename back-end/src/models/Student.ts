import {model, Schema, Types} from "mongoose";
import {IStudent} from "../interfaces";

const Student = model<IStudent>(
    "Student",
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
        turma: {
            type: Types.ObjectId,
            ref: "Class"
        }
    })
);
export default Student;