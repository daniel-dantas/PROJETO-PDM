import {model, Schema} from "mongoose";
import {IPrincipal} from "../interfaces";

const Principal = model<IPrincipal>(
    "Principal",
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
    })
);
export default Principal;