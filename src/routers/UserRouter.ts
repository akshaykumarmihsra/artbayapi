import { Router } from "express";
import UserController from "../controllers/UserController";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.router.get("/search", UserController.search);
    this.router.get("/all", UserController.getAll);
    this.router.get("/:id", UserController.getOne);
  }

  postRoutes() {
    this.router.post("/create", UserController.create);
  }

  patchRoutes() {
    this.router.patch("/update", UserController.update);
  }

  deleteRoutes() {
    this.router.delete("/delete", UserController.delete);
  }
}

export default new UserRouter().router;
