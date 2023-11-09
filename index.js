const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Your routes will go here
const todos = [
    { id: '1', title: 'Create a Node.js API' },
    { id: '2', title: 'Learn Express framework' },
    { id: '3', title: 'Build a Todo app' }
  ];  

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get a specific todo
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: Date.now().toString(), title };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.title = title;

  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex(todo => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deletedTodo = todos.splice(index, 1)[0];

  res.json(deletedTodo);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
