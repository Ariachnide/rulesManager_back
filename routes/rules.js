import express from "express";
import rules from "../controllers/ruleCtrl.js";

const router = express.Router();

router
    .route("/rules/")
    .get(rules.listRules)
    .post(rules.postRule);

router
    .route("/rules/:id")
    .get(rules.getRuleById)
    .put(rules.updateRule)
    .delete(rules.deleteRule);

export default router;
