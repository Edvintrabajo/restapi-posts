import { pool } from "../db.js";

export const getPosts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Posts");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Posts WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Posts WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description, likes } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Posts (title, description, likes) VALUES (?, ?, ?)",
      [title, description, likes]
    );
    res.status(201).json({ id: rows.insertId, title, description, likes });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, likes } = req.body;

    const [result] = await pool.query(
      "UPDATE Posts SET title = IFNULL(?, title), description = IFNULL(?, description), likes = IFNULL(?, likes) WHERE id = ?",
      [title, description, likes, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Posts not found" });

    const [rows] = await pool.query("SELECT * FROM Posts WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
