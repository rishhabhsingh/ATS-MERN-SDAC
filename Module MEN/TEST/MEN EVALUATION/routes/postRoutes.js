const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");

router.get("/", postController.getPosts);
router.get("/my", auth, postController.myPosts);
router.get("/add", auth, postController.showAddForm);
router.post("/add", auth, postController.addPost);
router.get("/edit/:id", auth, postController.showEditForm);
router.post("/edit/:id", auth, postController.updatePost);
router.post("/delete/:id", auth, postController.deletePost);

router.get("/:id", postController.getPost);

module.exports = router;
