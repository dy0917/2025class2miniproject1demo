const express = require("express");
const router = express.Router();

const todoList = [];
router.get("/", (req, res) => {
  res.json(todoList);
});
// create a todos
router.post("/", (req, res) => {
  const body = req.body;
  currentMaxId =
    todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) : 0;
  nextId = currentMaxId + 1;
  const newTodo = { ...body, id: nextId };
  todoList.push(newTodo);
  res.json(newTodo);
});

router.delete("/:id", (req, res) => {
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

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const targetTodo = todoList.find((todo) => todo.id == id);
  if (targetTodo) {
    const targetIndex = todoList.indexOf(targetTodo);
    const updatedTodo = { ...targetTodo, ...body };
    todoList.splice(targetIndex, 1, updatedTodo);
    res.json(updatedTodo);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
