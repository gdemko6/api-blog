const { PrismaClient } = require("@prisma/client");

const asyncHandler = require("express-async-handler");
const prisma = new PrismaClient();

const getAllPostComments = asyncHandler(async (req, res) => {
  const { postid } = req.params;
  const comments = await prisma.comment.findMany({
    where: { postId: parseInt(postid, 10) },
  });
  res.status(200).json({ comments });
});

const createComment = asyncHandler(async (req, res) => {
  const { postid } = req.params;
  const { text, name } = req.body;
  const createdComment = await prisma.comment.create({
    data: {
      text,
      name,
      post: {
        connect: { id: parseInt(postid, 10) },
      },
    },
  });
  res.status(201).json({ createdComment });
});

const editComment = asyncHandler(async (req, res) => {
  const { commentid } = req.params;
  const { text, name } = req.body;
  const updatedComment = await prisma.comment.update({
    where: { id: parseInt(commentid, 10) },
    data: { text, name },
  });
  res.status(200).json({ updatedComment });
});

const deleteComment = asyncHandler(async (req, res) => {
  const { commentid } = req.params;
  const deletedComment = await prisma.comment.delete({
    where: { id: parseInt(commentid, 10) },
  });
  res.status(204).json({ deletedComment });
});

module.exports = {
  getAllPostComments,
  createComment,
  editComment,
  deleteComment,
};
