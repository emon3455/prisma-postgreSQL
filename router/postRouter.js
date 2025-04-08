const express = require("express");
const router = express.Router();

const { getAllPost, addPost, updatePost, deletePost } = require("../controller/postController");

router.get("/", getAllPost);

router.post("/", addPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;