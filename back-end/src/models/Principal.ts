import {model, Schema, Document} from "mongoose";
import {IPrincipal} from "../interfaces";
interface PrincipalModel extends IPrincipal, Document {

}
const Principal = model<PrincipalModel>(
    "Principal",
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
    })
);
export default Principal;