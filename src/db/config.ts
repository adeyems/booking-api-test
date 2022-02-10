import { Dialect, Sequelize} from "sequelize";
import { config } from "../config";

const sequelizeConnection = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: "mysql" as Dialect
})

export default sequelizeConnection;
