import post from "../models/Post";

class PostController {
    static async listarPosts(req, res) {
        const listPosts = await post.find({});
        res.status(200).json(listPosts);
    }

    static async cadastrarPost(req, res){
        try {
            const newPost = await post.create(req.body);
            res.status(201).json({message: "", post: newPost});
        } catch (error) {
            res.status(500).json({message: `Fiu fiu, olha a mensagem: ${error.message}`});
        }
    }
}

export default PostController;
