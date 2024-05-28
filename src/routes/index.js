const router = require("express").Router();
const posts_routes = require("./posts/postRouter");

router.use("/posts", posts_routes);

module.exports = router;
