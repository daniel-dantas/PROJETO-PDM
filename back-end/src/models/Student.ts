import {model, Schema, Types, Document} from "mongoose";
import {IStudent} from "../interfaces";

interface StudentModel extends IStudent, Document {

}

const Student = model<StudentModel>(
    "Student",
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
        turma: {
            type: Types.ObjectId,
            ref: "Class"
        }
    })
);
export default Student;