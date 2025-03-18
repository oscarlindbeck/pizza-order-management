import express from "express";
import PostController from "../controllers/postController.js";

const routes = express.Router();

routes.get("/posts", PostController.getAllPosts);
routes.get("/posts/:id", PostController.getPostById);
routes.post("/posts", PostController.createPost);
routes.put("/posts/:id", PostController.updatePost);
routes.delete("/posts/:id", PostController.deletePost);

export default routes;