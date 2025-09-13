const express = require("express");
const app = express();
app.use(express.json());

const port = 5050;
const todoList = [
  {
    id: 1,
    title: "This is a title",
    desc: "This is a desc",
    isCompleted: false,
  },
  {
    id: 2,
    title: "This is a title1",
    desc: "This is a desc1",
    isCompleted: true,
  },
];

app.use("/", express.static("./public"));

// get all todos
app.get("/api/todos", (req, res) => {
  res.json(todoList);
});
// create a todos
app.post("/api/todos", (req, res) => {
  const body = req.body;
  currentMaxId =
    todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) : 0;
  nextId = currentMaxId + 1;
  const newTodo = { ...body, id: nextId };
  todoList.push(newTodo);
  res.json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const targetTodo = todoList.find((todo) => todo.id == id);
  if (targetTodo) {
    const targetIndex = todoList.indexOf(targetTodo);
    todoList.splice(targetIndex, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(403);
  }
});

app.listen(port, () => {
  console.log("server is up");
});
