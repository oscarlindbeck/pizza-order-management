import post from "../models/Post.js";

class PostController {
  static async getAllPosts(req, res) {
    try {
      const listPosts = await post.find({});
      res.status(200).json(listPosts);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getPostById(req, res) {
    try {
      const postById = await post.findById(req.params.id);

      if (!postById) return res.status(404).send("Post não encontrado");

      return res.status(201).json(postById);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async createPost(req, res) {
    try {
      const newPost = new post(req.body);

      await newPost.save();

      return res
        .status(201)
        .json({ message: "Post criado com sucesso!", post: newPost });
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async updatePost(req, res) {
    try {
      const postToUpdate = await post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      if (!postToUpdate) return res.status(404).send("Post não encontrado");

      return res.status(200).json(postToUpdate);
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  static async deletePost(req, res) {
    try {
      const postToDelete = await post.findByIdAndDelete(req.params.id);

      if (!postToDelete) return res.status(404).send("Post não encontrado");

      return res.status(200).send("Post removido com sucesso!");
    } catch (error) {
      res.status(500).json({ message: `Error: ${error.message}` });
    }
  }
}

export default PostController;
