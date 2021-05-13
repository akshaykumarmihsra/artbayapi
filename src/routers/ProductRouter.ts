import { Router } from "express";
import ProductController from "../controllers/ProductController";

class ProductRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.router.get("/search", ProductController.search);
    this.router.get("/all", ProductController.getAll);
    this.router.get("/:id", ProductController.getOne);
  }

  postRoutes() {
    this.router.post("/create", ProductController.create);
  }

  patchRoutes() {
    this.router.patch("/update", ProductController.update);
  }

  deleteRoutes() {
    this.router.delete("/delete", ProductController.delete);
  }
}

export default new ProductRouter().router;
