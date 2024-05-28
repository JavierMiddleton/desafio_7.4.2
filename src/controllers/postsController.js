const postsDatabase = require("../models/postsDatabase");

const getPostsCon = async (req, res) => {
  try {
    const posts = await postsDatabase.getAll();
    res.json(posts);
    console.log("Obtenido");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

const addPostCon = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await postsDatabase.addPost(postBody);
    res.json(post);
    console.log("Enviado");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

const addLikesCon = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postsDatabase.likePost(id);
    res.json({ msg: `¡Post ${id} liked!`, post });
  } catch (error) {
    console.error("Error al agregar like:", error);
    res.status(500).json({ msg: "Error del servidor" });
  }
};

const deletePostsCon = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postsDatabase.deletePost(id);
    res.json({ msg: `¡Post ${id} eliminado!`, post });
  } catch (error) {
    console.error("Error al eliminar post:", error);
    res.status(500).json({ msg: "Error del servidor" });
  }
};

module.exports = {
  getPostsCon,
  addPostCon,
  addLikesCon,
  deletePostsCon,
};
