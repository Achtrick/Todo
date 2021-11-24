const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  text: {
    type: "string",
    required: true,
  },
  date: {
    type: "date",
    required: true,
  },
});

const todos = mongoose.model("todos", todosSchema);
module.exports = todos;
