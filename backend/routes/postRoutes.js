const postController = require("../controllers/postController");
const router = require("express").Router();

// Routes for /posts

// Retrieve all posts
router.get("/", postController.getAllPosts);

// Create a new post
router.post("/", postController.createPost);

// Retrieve a specific post by ID
router.get("/:postid", postController.getPost);

// Update a specific post by ID
router.put("/:postid", postController.editPost);

// Delete a specific post by ID
router.delete("/:postid", postController.deletePost);

module.exports = router;
