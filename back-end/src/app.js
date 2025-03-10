import express from "express";

const app = express();
app.use(express.json());

const posts = [
    {
        id: 1,
        title: "Aula 1",
        description: "Descrição aula 1",
        author: "Fulano"
    },
    {
        id: 2,
        title: "Aula 2",
        description: "Descrição aula 2",
        author: "Beltrano"
    },
    {
        id: 3,
        title: "Aula 3",
        description: "Descrição aula 3",
        author: "Sicrano"
    }
]

function searchPost(id){
 return posts.findIndex(post => {
    return post.id === Number(id)
 })
}

app.get("/", (req, res) => {
    res.status(200).send("Express running.");
})

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
})

app.get("/posts/:id", (req, res) => {
    let index = searchPost(req.params.id);
    res.status(200).json(posts[index]);
})

app.post("/posts", (req, res) => {
    posts.push(req.body);
    res.status(201).send(req.body);
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