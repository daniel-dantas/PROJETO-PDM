import  { model, Schema} from "mongoose";
import {IClass} from "../interfaces";

const Class = model<IClass>(
  "Class",
  new Schema({
    codigo: {
      type: Number,
    },
    serie: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
  })
);
export default Class;