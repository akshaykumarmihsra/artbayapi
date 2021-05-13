import { DataTypes } from "sequelize";
import sequelize from "../db";

const Product = sequelize.define("product", {
  name: DataTypes.STRING,
  imageUrl: DataTypes.TEXT,
  description: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER,
});

export default Product;
