import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Term = sequelize.define('terms', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

export default Term;
