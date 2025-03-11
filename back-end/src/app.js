import express from "express";
import connectDatabase from "./config/dbConnect.js";
import post from "./models/Post.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
    console.error("Connection exception", error)
});

connection.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso!");
});

const app = express();
app.use(express.json());

function searchPost(id) {
    return posts.findIndex(post => {
        return post.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Express running.");
})

app.get("/posts/:id", (req, res) => {
    let index = searchPost(req.params.id);
    res.status(200).json(posts[index]);
})

app.put("/posts/:id", (req, res) => {
    let index = searchPost(req.params.id);
    posts[index].title = req.body.title;
    posts[index].description = req.body.description;
    posts[index].author = req.body.author;
    res.status(200).json(posts[index]);
})

app.delete("/posts/:id", (req, res) => {
    let index = searchPost(req.params.id);
    posts.splice(index, 1);
    res.status(200).json("Post removed.");
})

export default app;