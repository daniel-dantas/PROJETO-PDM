import ClassModel from "../models/Class";


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

}

export default ClassController;