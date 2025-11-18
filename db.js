import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        host: "./dev.sqlite"
    }
);

const connectDB = async() => {
    sequelize.sync();

    await sequelize.authenticate();
    console.log("Connected to DB");
};

export { sequelize, connectDB };
