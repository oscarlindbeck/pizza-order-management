import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, require: true },
    description: { type: String },
    author: { type: String, require: true }
}, { versionKey: false });

const post = mongoose.model("posts", postSchema);

export default post;