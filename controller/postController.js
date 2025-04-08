const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all posts
async function getAllPost(req, res) {
  const posts = await prisma.post.findMany();
  res.json(posts);
}

// Add new post
async function addPost(req, res) {
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: { title, content },
  });
  res.json(post);
}

// Update post
async function updatePost(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id) },
      data: { title, content },
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
}

// Delete post
async function deletePost(req, res) {
  const { id } = req.params;
  try {
    await prisma.post.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
}

module.exports = {
  getAllPost,
  addPost,
  updatePost,
  deletePost
};
