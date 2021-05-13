import { Sequelize } from "sequelize";

const MYSQL_USERNAME = process.env.MYSQL_USERNAME || "root";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "mysql";
const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME || "artbay";
const sequelize = new Sequelize(MYSQL_DB_NAME, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

export default sequelize;
