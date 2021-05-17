import  { model, Schema, Document} from "mongoose";
import {IClass} from "../interfaces";

interface ClassModel extends IClass, Document{

}

const Class = model<ClassModel>(
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