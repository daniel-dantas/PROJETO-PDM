import mongoose from "mongoose";

class MongoDB {
    static async connect(uri: string) {
      return await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
    }
  }
  
 export default MongoDB;