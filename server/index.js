const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3001;

app = express();

app.listen(port, () => {
  console.log(`Running on port:${port}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://root:root@cluster0.wkamj.mongodb.net/Galactech?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const todosModel = require("./Models/todos");

app.get("/", (req, res) => {
  res.send(`Running on Port:${port}`);
});

app.post("/api/createTodo", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const date = req.body.date;
  const todo = new todosModel({
    title: title,
    text: text,
    date: date,
  });
  try {
    todo.save();
    res.send("SUCCESS");
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
});

app.get("/api/getTodos", (req, res) => {
  todosModel
    .find({}, (err, todos) => {
      res.send(todos);
    })
    .sort({ date: 1 });
});

app.delete(`/api/deletePost/:todoId`, async (req, res) => {
  const todoId = req.params.todoId;
  try {
    await todosModel.findByIdAndDelete(todoId);
    res.send("SUCCESS");
  } catch (err) {
    res.send("ERROR");
  }
});

app.put("/api/updateTodo", (req, res) => {
  const todoId = req.body.todoId;
  const title = req.body.title;
  const text = req.body.text;
  const date = req.body.date;

  todosModel.findById(todoId, (err, todo) => {
    if (req.body.title) {
      todo.title = title;
    }
    if (req.body.text) {
      todo.text = text;
    }
    if (req.body.date) {
      todo.date = date;
    }
    todo.save();
    if (err) {
      res.send("ERROR");
    } else {
      res.send("SUCCESS");
    }
  });
});
