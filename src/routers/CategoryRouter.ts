import { Router } from "express";
import CategoryController from "../controllers/CategoryController";

class CategoryRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.router.get("/search", CategoryController.search);
    this.router.get("/all", CategoryController.getAll);
    this.router.get("/:id", CategoryController.getOne);
  }

  postRoutes() {
    this.router.post("/create", CategoryController.create);
  }

  patchRoutes() {
    this.router.patch("/update", CategoryController.update);
  }

  deleteRoutes() {
    this.router.delete("/delete", CategoryController.delete);
  }
}

export default new CategoryRouter().router;
