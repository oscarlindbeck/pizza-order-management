import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Connection exception", error);
});

connection.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso!");
});

const app = express();
routes(app);

export default app;
