import express from "express";
import PostController from "../controllers/postController";

const routes = express.Router();

routes.get("/posts", PostController.listarPosts);