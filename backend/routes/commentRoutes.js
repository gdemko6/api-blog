const commentController = require("../controllers/commentController");
const router = require("express").Router({ mergeParams: true });

// Routes for /posts/:postid/comments

// Retrieve all comments from a post
router.get("/", commentController.getAllPostComments);

// Create a comment on a post
router.post("/", commentController.createComment);

// Edit a comment on a post
router.put("/:commentid", commentController.editComment);

// Delete a comment on a post
router.delete("/:commentid", commentController.deleteComment);

module.exports = router;
