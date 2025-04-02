import { PrismaClient, Prisma } from "@prisma/client";

const asyncHandler = require("express-async-handler");
const prisma = new PrismaClient();

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json({ posts });
});

const createPost = asyncHandler(async (req, res) => {
  const { title, text } = req.body;
  const newPost = await prisma.post.create({
    data: { title, text },
  });
  res.status(201).json({ post: newPost });
});
