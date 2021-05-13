import  { model, Schema} from "mongoose";

const User = model(
  "User",
  new Schema({
    matricula: {
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
  })
);
export default User;