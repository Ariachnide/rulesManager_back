import express from "express";
import terms from "../controllers/termCtrl.js";

const router = express.Router();

router
    .route("/terms/")
    .get(terms.listTerms)
    .post(terms.postTerm);

router
    .route("/terms/:id")
    .get(terms.getTermById)
    .put(terms.updateTerm)
    .delete(terms.deleteTerm);

export default router;
