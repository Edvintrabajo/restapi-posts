import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.controller.js";

const router = Router();

// GET all Posts
router.get("/posts", getPosts);

// GET An Post
router.get("/posts/:id", getPost);

// DELETE An Post
router.delete("/posts/:id", deletePost);

// INSERT An Post
router.post("/posts", createPost);

// UPDATE An Post
router.patch("/posts/:id", updatePost);

export default router;
