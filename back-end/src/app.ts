import express, {Express, json} from "express";
import Cors from "cors";

export default class App {

    private main: Express;

    constructor() {
        this.main = express();

        // Processing settings
        this.config();

        //Processing Routes
        this.routes();
    }

    private config() {
        this.main.use(Cors());
        this.main.use(json());
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