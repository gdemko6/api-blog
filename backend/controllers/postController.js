const { PrismaClient } = require("@prisma/client");

const asyncHandler = require("express-async-handler");
const prisma = new PrismaClient();

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.post.findMany();
  res.status(200).json({ posts });
});

const createPost = asyncHandler(async (req, res) => {
  const { title, text } = req.body;
  const newPost = await prisma.post.create({
    data: { title, text },
  });
  res.status(201).json({ post: newPost });
});

const getPost = asyncHandler(async (req, res) => {
  const { postid } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(postid, 10) },
  });
  res.json({ post });
});

const editPost = asyncHandler(async (req, res) => {
  const { postid } = req.params;
  const { title, text } = req.body;
  const updatedPost = await prisma.post.update({
    where: { id: parseInt(postid, 10) },
    data: { title, text },
  });
  res.status(200).json({ post: updatedPost });
});

const deletePost = asyncHandler(async (req, res) => {
  const { postid } = req.params;
  const deletedPost = await prisma.post.delete({
    where: { id: parseInt(postid, 10) },
  });
  res.status(204).json({ post: deletedPost });
});

module.exports = {
  getAllPosts,
  createPost,
  getPost,
  editPost,
  deletePost,
};
