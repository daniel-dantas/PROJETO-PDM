import App from "./app";
import DotEnv from "dotenv";

DotEnv.config();

// Loading a new instance of the application
const mainApp = new App({
    uri_mongo: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
});

mainApp.listen(process.env.PORT);
