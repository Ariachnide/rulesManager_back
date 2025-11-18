import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db.js";
import cors from "cors";
dotenv.config({ path: "./.env" });

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) => {
    res.send("- RulesManager app online -");
});

app.listen(process.env.API_PORT, () => {
    console.log(`RulesManager app listening at ${process.env.API_BASE_URL}:${process.env.API_PORT}`);
});
