import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/", indexRoutes);
app.use("/api", postsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
