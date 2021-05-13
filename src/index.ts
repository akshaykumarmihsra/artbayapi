import { Server } from "./server";
require("dotenv").config();

let server = new Server().app;
let port = process.env.API_PORT || 5000;
server.listen(port, () => {
  console.log("server is running at port " + port);
});
