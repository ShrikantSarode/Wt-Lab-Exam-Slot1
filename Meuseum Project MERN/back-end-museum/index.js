const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/museums").then(() => {
  console.log("Connected to database");
});

const articlesSchema = new Schema({
  id: Number,
  name: String,
  category: String,
  date: Date,
  creatorName: String,
});
const articlesModel = mongoose.model("articles", articlesSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/showArticles", async (req, res) => {
  var result = await articlesModel.find();
  res.send(result);
});

app.post("/addArticles", async (req, res) => {
  var instance = new articlesModel(req.body);
  await instance.save();
  res.send("Article Added");
});

app.put("/updateArticles/:id", async (req, res) => {
  await articlesModel.updateOne({ id: req.params.id }, { $set: req.body });
  res.send(req.params.id + " Article updated");
});
app.listen(9011);