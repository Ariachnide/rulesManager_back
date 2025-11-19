import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const Rule = sequelize.define('rules', {
    name: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    rule: {
        type: DataTypes.JSON(),
        allowNull: false
    }
});

export default Rule;
