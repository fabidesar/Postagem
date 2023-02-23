const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const Post = require("../models/post");
const bodyParser = require("body-parser");
const { post } = require("../models/post");
const app = express();

//settings

app.use("/static", express.static("static"));
app.use(express.static("images"));
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes

app.get("/", (req, res) => {
  res.render("post");
});

app.post("/postagens", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.json({ msg: "Preencha todos os requisitos!" });
  mongoose
    .model("post")
    .create({ title, content })
    .then(() => {
      return res.json({ msg: "Noticia criada com sucesso!", code: 201 });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ msg: "Ocorreu um erro interno." });
    });
});

app.get("/postagens", async (req, res) => {
  const posts = await mongoose.model("post").find({}).limit(10).lean();
  res.render("index", { posts });
});

// Port

const port = 3230;
app.listen(port, () =>
  console.log(`O servidor esta rodando em localhost:/${port}!`)
);
