const gymItems = [];

const addTodo = (todo) => {
  gymItems.push(todo);
};

const getAllTodosFromService = () => {
  return gymItems;
};
const getTodoById = (id) => {
  const todo = gymItems.find((todo) => todo.id == id);
  return todo;
};

const deleteTodo = (id) => {
  const targetTodo = getTodoById(id);
  const targetIndex = gymItems.indexOf(targetTodo);
  gymItems.splice(targetIndex, 1);
};

const updateTodo = (id, body) => {
  const targetTodo = getTodoById(id);
  const targetIndex = gymItems.indexOf(targetTodo);
  const updatedTodo = { ...targetTodo, ...body };
  gymItems.splice(targetIndex, 1, updatedTodo);
  return updatedTodo;
};

module.exports = {
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
};
