import Category from "../models/Category";

export default class CategoryController {
  static async getAll(req, res, next) {
    try {
      const response = await Category.findAll();
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
      const response = await Category.findByPk(id);
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
      const cols = ["id", "name"];
      const where = {};
      cols.forEach((element) => {
        if (req.query[element]) {
          where[element] = req.query[element];
        }
      });
      const response = await Category.findAll({ where: where });
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
      let cols = ["id", "name", "imageUrl"];
      let data = {};
      cols.forEach((element) => {
        if (req.body[element]) {
          data[element] = req.body[element];
        }
      });
      if (Object.keys(data).length !== 0) {
        await Category.create(data);
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
      const oldRecord = await Category.findOne({ where: { id: id } });
      let cols = ["name", "imageUrl"];
      let data = {};
      cols.forEach((element) => {
        if (req.body[element]) {
          data[element] = req.body[element];
        } else {
          data[element] = oldRecord[element];
        }
      });
      if (Object.keys(data).length == cols.length) {
        await Category.update(data, { where: { id: id } });
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
      const oldRecord = await Category.findOne({ where: { id: id } });
      if (oldRecord) {
        await Category.destroy({ where: { id: id } });
        res.send({ message: "Record Deleted Successfully" });
      } else {
        next({ message: "Record Not Found" });
      }
    } catch (error) {
      next(error);
    }
  }
}
