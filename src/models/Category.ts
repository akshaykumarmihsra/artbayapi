import { DataTypes } from "sequelize";
import sequelize from "../db";
import Product from "./Product";

const Category = sequelize.define("category", {
  name: DataTypes.STRING,
  imageUrl: DataTypes.TEXT,
});

Category.hasMany(Product, {
  foreignKey: {
    name: "categoryId",
  },
});

Product.belongsTo(Category, { as: "category" });

export default Category;
