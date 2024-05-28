const postsRouter = require("express").Router();
const {
  getPostsCon,
  addPostCon,
  addLikesCon,
  deletePostsCon,
} = require("../../controllers/postsController");

postsRouter.get("/", getPostsCon);
postsRouter.post("/", addPostCon);
postsRouter.put("/like/:id", addLikesCon);
postsRouter.delete("/:id", deletePostsCon);

module.exports = postsRouter;
