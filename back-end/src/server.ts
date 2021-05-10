import App from "./app";
import DotEnv from "dotenv";

DotEnv.config();

// Loading a new instance of the application
const mainApp = new App();

mainApp.listen(process.env.PORT);
