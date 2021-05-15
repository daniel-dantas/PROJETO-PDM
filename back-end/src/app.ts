import express, {Express, json} from "express";
import Cors from "cors";
import MongoDB from "./database/Mongo";

export default class App {

    private main: Express;

    constructor({uri_mongo}) {
        this.main = express();

        // Processing settings
        this.config(uri_mongo);

        //Processing Routes
        this.routes();
    }

    private config(uri_mongo) {
        this.main.use(Cors());
        this.main.use(json());


        MongoDB.connect(uri_mongo).then(() => {
            console.log(`MongoDB runnig!`);
        });

        this.routes();

    }

    private routes() {
        this.main.get("/api/v1", (req, res) => {
            res.status(200).json({
                message: "Aplication development"
            });
        })
    }

    public listen(PORT) {
        this.main.listen(PORT, () => {
            console.log("Server is open in port " + PORT);
        })
    }
}