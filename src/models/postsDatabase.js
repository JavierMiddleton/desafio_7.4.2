const database = require("../database/config");

const getAll = async () => {
  const { rows } = await database.query("SELECT * FROM posts");
  return rows;
};

const getPost = async (id) => {
  const consulta = "SELECT * FROM posts WHERE id = $1";
  const values = [id];
  const { rows } = await database.query(consulta, values);

  return rows;
};

const addPost = async (post) => {
  const { titulo, url, descripcion } = post;
  const likes = 0;
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
  const valores = [titulo, url, descripcion, likes];
  const { rows } = await database.query(consulta, valores);

  return rows;
};

const likePost = async (id) => {
  const consulta =
    "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const result = await database.query(consulta, [id]);
  return result;
};

const deletePost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const result = await database.query(consulta, [id]);
  return result.rows[0];
};

const postsDatabase = {
  getAll,
  addPost,
  getPost,
  likePost,
  deletePost,
};

module.exports = postsDatabase;
