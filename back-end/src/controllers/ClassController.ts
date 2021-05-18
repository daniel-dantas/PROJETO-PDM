import ClassModel from "../models/Class";
import jwt from "json-web-token";
import {IUser} from "../interfaces";
import Student from "../models/Student";
import Teacher from "../models/Teacher";
import Principal from "../models/Principal";
import { Request, Response } from "express";

class ClassController {
    static async create(req, res) {
        try {
            const classmodel = req.body;
            ClassModel.create(classmodel)
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
            const classmodel = await ClassModel.find();

            return res.status(200).json(classmodel);
        } catch (err) {
            return res.status(500).json({
                message: "Read failed!",
                error: err,
            });
        }
    }

    static async get(req, res) {
        try {
            const classmodel = await ClassModel.findOne({_id: req.params.id});
            if (classmodel) {
                return res.status(200).json(classmodel);
            } else {
                return res.status(400).json({
                    message: "Does not class exists!",
                    error: new Error("Does not class exists"),
                });
            }
        } catch (err) {
            return res.status(400).json({
                message: "Get Failed",
                error: err,
            });
        }
    }

    static async matricular(req: Request, res: Response) {
        try {
            const authHeader = req.headers.authorization;

            const { turma } = req.body;

            // @ts-ignore
            const [, token] = authHeader.split(" ")

            jwt.decode(process.env.JWT_KEY, token, async (err, tokenResult) => {

                if(err) return res.status(404).json({
                    message: "Authentication error"
                });
                if(!tokenResult) return res.status(404).json({
                    message: "Authentication error"
                });

                const userResult = await Student.findById(tokenResult).populate("turma").exec();

                if (!userResult) return res.status(400).json({
                    message: "Authentication error"
                });

                userResult.turma = turma;

                await Student.updateOne({_id: userResult._id}, userResult);

                return res.status(200).json({

                });
            });
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}

export default ClassController;