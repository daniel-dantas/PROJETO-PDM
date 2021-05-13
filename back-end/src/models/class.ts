import  { model, Schema} from "mongoose";

const Class = model(
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