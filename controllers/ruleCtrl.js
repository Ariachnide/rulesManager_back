import Rule from "../models/rule.js";

const postRule = async(req, res) => {
    const newRule = await Rule.create({
        name: req.body.name,
        rule: req.body.rule
    });
    res.status(201).json({
        error: false, 
        message: "Rule has been created", 
        result: newRule
    });
};

const listRules = async(req, res) => {
    const rules = await Rule.findAndCountAll();
    res.status(200).json({
        error: false,
        message: "Rules list has been fetched",
        result: rules
    });
};

const getRuleById = async (req, res) => {
    const rule = await Rule.findByPk(req.params.id);
    if (rule === null) {
        res.status(404).json({
            error: true,
            message: `Rule with id ${req.params.id} cannot be found`,
            result: rule
        });
    } else {
        res.status(200).json({
            error: false,
            message: `Rule with id ${req.params.id} has been fetched`,
            result: rule
        });
    }
};

const updateRule = async (req, res) => {
    const rule = await Rule.findByPk(req.params.id);
    if (rule === null) {
        res.status(404).json({
            error: true,
            message: `Rule with id ${req.params.id} cannot be found`,
            result: rule
        });
    } else {
        rule.name = req.body.name;
        rule.rule = req.body.rule;
        await rule.save();
        res.status(201).json({
            error: false,
            message: `Rule with id ${req.params.id} has been fetched`,
            result: rule
        });
    }
}

const deleteRule = async (req, res) => {
    const isDeleted = await Rule.destroy({where: {id:req.params.id}});
    if (!isDeleted) throw new Error ("Task not found");
    res
        .status(200).json({
            error: false,
            message: `Rule with id ${req.params.id} has been deleted`,
            result: Boolean(isDeleted)
        })
        .send("deleted");
};

export default {
    postRule,
    listRules,
    getRuleById,
    updateRule,
    deleteRule
};
