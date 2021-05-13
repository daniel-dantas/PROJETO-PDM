import UserModel from "../models/user";
import jwt from "json-web-token";
import crypt from "bcrypt";


class UserController {
    static async create(req, res) {
        try {
            const user = req.body;

            const password = crypt.hash(user.password);

            UserModel.create({...user, password})
                .then((result) => {
                    return res.status(200).json(result);
                })
                .catch((err) => {
                    return res.status(500).json({
                        message: "Created Failed",
                        error: err,
                    });
                });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: "Created Failed",
            });
        }
    }

    static async read(req, res) {
        try {
            const user = await UserModel.find();

            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json({
                message: "Read failed!",
                error: err,
            });
        }
    }

    static async get(req, res) {
        try {
            const user = await UserModel.findOne({_id: req.params.id});
            if (user) {
                return res.status(200).json(user);
            } else {
                return res.status(400).json({
                    message: "Does not user exists!",
                    error: new Error("Does not user exists"),
                });
            }
        } catch (err) {
            return res.status(400).json({
                message: "Get Failed",
                error: err,
            });
        }
    }

    static async auth(req, res) {
        try {
            const {email, password} = req.body;

            const user = await UserModel.findOne({email});

            if (!user) return res.status(400).json({
                message: "Authentication error"
            });

            crypt.compare(password, user.password, (err, result) => {
                jwt.encode(process.env.JWT_KEY, user._id, (err, token) => {
                    if (err) return res.status(400).json({
                        message: "Authentication error"
                    });

                    if (result) return res.status(200).json({
                        token
                    });
                });

            })


        } catch (e) {
            return res.status(500).json({});
        }
    }

}

export default UserController;