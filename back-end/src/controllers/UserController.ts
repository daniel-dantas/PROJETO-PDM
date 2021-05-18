import jwt from "json-web-token";
import crypt from "bcrypt";
import {IStudent, IUser} from "../interfaces";
import Student from "../models/Student";
import Teacher from "../models/Teacher";
import Principal from "../models/Principal";
import {Response, Request} from "express";

interface UserProps extends IUser {
    type: "Professor" | "Aluno" | "Diretor";
}

class UserController {
    static async create(req: Request, res: Response) {
        try {
            const user = req.body as UserProps;

            // @ts-ignore


            let result;

            switch (user.type) {
                case "Aluno":
                    const alunoCount = await Student.countDocuments();
                    crypt.hash(user.senha, 1, async (err, pass) => {
                        user.senha = pass;
                        result = await Student.create({...user, matricula: "A"+alunoCount} as any);
                        return res.status(200).json(result);
                    });
                    break;
                case "Professor":
                    const professorCount = await Teacher.countDocuments();
                    crypt.hash(user.senha, 1, async (err, pass) => {
                        user.senha = pass;
                        result = await Teacher.create({...user, matricula: "P"+(professorCount+1)} as any);
                        return res.status(200).json(result);
                    });
                    break;
                case "Diretor":
                    const diretorCount = await Principal.countDocuments();
                    crypt.hash(user.senha, 1, async (err, pass) => {
                        user.senha = pass;
                        result = await Principal.create({...user, matricula: "D"+(diretorCount+1)} as any);
                        return res.status(200).json(result);
                    });
                    break;
                default:
                    return res.status(404).json({message: "Inform user type"});
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: "Created Failed",
            });
        }
    }

    static async auth(req: Request, res: Response) {
        try {
            const {email, senha} = req.body as UserProps;

            let userResult: IUser = await Student.findOne({email});

            if (!userResult) userResult = await Teacher.findOne({email});
            if (!userResult) userResult = await Principal.findOne({email});

            if (!userResult) return res.status(400).json({
                message: "Authentication error"
            });

            crypt.compare(senha, userResult.senha, (err, result) => {
                // @ts-ignore
                jwt.encode(process.env.JWT_KEY, userResult._id, (err, token) => {
                    if (err) return res.status(400).json({
                        message: "Authentication error"
                    });

                    if (result) return res.status(200).json({
                        token,
                        user: {
                            // @ts-ignore
                            _id: userResult._id,
                            email: userResult.email,
                            matricula: userResult.matricula,
                            nome: userResult.nome,
                            dataNascimento: userResult.dataNascimento,
                        }
                    });
                });

            })


        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: "Authentication error"
            });
        }
    }

    static async read(req: Request, res: Response) {
        try{
            //Query Params booleans
            const { alunos, professores, diretores } = req.query

            const result: IUser[] = [];

            if(alunos) result.concat(await Student.find());
            if(professores) result.concat(await Teacher.find());
            if(diretores) result.concat(await Principal.find());

            return res.status(200).json(result);

        } catch (e) {
            return res.status(500).json({
                message: "Failed read"
            });
        }
    }

    static async update(req: Request, res: Response) {
        
    }

}

export default UserController;