import * as express from "express";
import CategoryRouter from "./routers/CategoryRouter";
import ProductRouter from "./routers/ProductRouter";
import UserRouter from "./routers/UserRouter";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.app.use(express.json());
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setRoutes() {
    this.app.use("/api/v1/category", CategoryRouter);
    this.app.use("/api/v1/product", ProductRouter);
    this.app.use("/api/v1/user", UserRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not Found",
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something Went Wrong. Please Try Again.",
        status_code: errorStatus,
      });
    });
  }
}
