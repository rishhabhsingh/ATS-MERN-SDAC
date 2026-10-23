const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render("posts", { posts });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const isOwner = req.session.userId === post.author.toString();
    res.render("postDetail", { post, isOwner });
  } catch (err) {
    res.status(404).render("error", { message: "Post not found" });
  }
};

exports.myPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.session.userId }).sort({ createdAt: -1 });
    res.render("myPosts", { posts });
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
};

exports.showAddForm = (req, res) => {
  res.render("addPost", { error: null, post: {} });
};

exports.addPost = async (req, res) => {
  try {
    const { title, category, content } = req.body;

    await Post.create({
      title: title.trim(),
      category: category.trim(),
      content: content.trim(),
      author: req.session.userId,
      authorName: req.session.userName,
    });
    res.redirect("/posts/my");
  } catch (err) {
    res.status(400).send(err.message);
  }
}

exports.showEditForm = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.author.toString() !== req.session.userId) {
      return res.status(403).render("error", { message: "You can only edit your own posts" });
    }
    res.render("editPost", { error: null, post });
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.author.toString() !== req.session.userId) {
      return res.status(403).render("error", { message: "You can only edit your own posts" });
    }

    const { title, category, content } = req.body;
    if (!title || !category || !content) {
      return res.render("editPost", {
        error: "Title, category and content are required",
        post: { _id: post._id, title, category, content },
      });
    }
    post.title = title.trim();
    post.category = category.trim();
    post.content = content.trim();
    await post.save();
    res.redirect("/posts/" + post._id);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.author.toString() !== req.session.userId) {
      return res.status(403).render("error", { message: "You can only delete your own posts" });
    }
    await post.deleteOne();
    res.redirect("/posts/my");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
