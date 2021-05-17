import {model, Schema, Document} from "mongoose";
import {ITeacher} from "../interfaces";

interface TeacherModel extends ITeacher, Document {

}

const Teacher = model<TeacherModel>(
    "Teacher",
    new Schema({
        matricula: {
            unique: true,
            type: String,
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
        }
    })
);
export default Teacher;