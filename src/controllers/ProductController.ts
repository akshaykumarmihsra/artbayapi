import Product from "../models/Product";

export default class ProductController {
  static async getAll(req, res, next) {
    try {
      const response = await Product.findAll({
        include: ["category"],
        attributes: [
          "id",
          "name",
          "imageUrl",
          "description",
          "price",
          "createdAt",
          "updatedAt",
        ],
      });
      if (response) {
        res.send(response);
      } else {
        next({ message: "Record Not Found" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const id = req.params.id;
      const response = await Product.findByPk(id, {
        include: ["category"],
        attributes: [
          "id",
          "name",
          "imageUrl",
          "description",
          "price",
          "createdAt",
          "updatedAt",
        ],
      });
      if (response) {
        res.send(response);
      } else {
        next({ message: "Record Not Found" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async search(req, res, next) {
    try {
      const cols = ["id", "name", "categoryId"];
      const where = {};
      cols.forEach((element) => {
        if (req.query[element]) {
          where[element] = req.query[element];
        }
      });
      const response = await Product.findAll({
        where: where,
        include: ["category"],
        attributes: [
          "id",
          "name",
          "imageUrl",
          "description",
          "price",
          "createdAt",
          "updatedAt",
        ],
      });
      if (response.length !== 0) {
        res.send(response);
      } else {
        next({ message: "Record Not Found" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      let cols = ["name", "imageUrl", "description", "price", "categoryId"];
      let data = {};
      cols.forEach((element) => {
        if (req.body[element]) {
          data[element] = req.body[element];
        }
      });
      if (Object.keys(data).length !== 0) {
        await Product.create(data);
        res.send({ message: "Record Created Successfully" });
      } else {
        next({ message: "Error" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      let id = req.query.id;
      const oldRecord = await Product.findOne({ where: { id: id } });
      let cols = ["name", "imageUrl", "description", "price", "categoryId"];
      let data = {};
      cols.forEach((element) => {
        if (req.body[element]) {
          data[element] = req.body[element];
        } else {
          data[element] = oldRecord[element];
        }
      });
      if (Object.keys(data).length == cols.length) {
        await Product.update(data, { where: { id: id } });
        res.send({ message: "Record Updated Successfully" });
      } else {
        next({ message: "Error" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      let id = req.query.id;
      const oldRecord = await Product.findOne({ where: { id: id } });
      if (oldRecord) {
        await Product.destroy({ where: { id: id } });
        res.send({ message: "Record Deleted Successfully" });
      } else {
        next({ message: "Record Not Found" });
      }
    } catch (error) {
      next(error);
    }
  }
}
