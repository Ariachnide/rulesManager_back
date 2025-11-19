import Term from "../models/term.js";

const postTerm = async(req, res) => {
    const newTerm = await Term.create({
        name: req.body.name,
        type: req.body.type
    });
    res.status(201).json({
        error: false, 
        message: "Term has been created", 
        result: newTerm
    });
};

const listTerms = async(req, res) => {
    const terms = await Term.findAndCountAll();
    res.status(200).json({
        error: false,
        message: "Terms list has been fetched",
        result: terms
    });
};

const getTermById = async (req, res) => {
    const term = await Term.findByPk(req.params.id);
    if (term === null) {
        res.status(404).json({
            error: true,
            message: `Term with id ${req.params.id} cannot be found`,
            result: term
        });
    } else {
        res.status(200).json({
            error: false,
            message: `Term with id ${req.params.id} has been fetched`,
            result: term
        });
    }
};

const updateTerm = async (req, res) => {
    const term = await Term.findByPk(req.params.id);
    if (term === null) {
        res.status(404).json({
            error: true,
            message: `Term with id ${req.params.id} cannot be found`,
            result: term
        });
    } else {
        term.name = req.body.name;
        term.type = req.body.type;
        await term.save();
        res.status(201).json({
            error: false,
            message: `Term with id ${req.params.id} has been fetched`,
            result: term
        });
    }
}

const deleteTerm = async (req, res) => {
    const isDeleted = await Term.destroy({where: {id:req.params.id}});
    if (!isDeleted) throw new Error ("Task not found");
    res
        .status(200).json({
            error: false,
            message: `Term with id ${req.params.id} has been deleted`,
            result: Boolean(isDeleted)
        })
        .send("deleted");
};

export default {
    postTerm,
    listTerms,
    getTermById,
    updateTerm,
    deleteTerm
};
