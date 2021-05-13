import { DataTypes } from "sequelize";
import sequelize from "../db";

const User = sequelize.define("user", {
  userId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  provider: DataTypes.STRING,
  email: DataTypes.STRING,
  mobile: DataTypes.STRING,
});

export default User;
