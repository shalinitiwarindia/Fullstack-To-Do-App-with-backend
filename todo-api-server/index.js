const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Path to the JSON file that will store the TODOs
const todosFilePath = path.join(__dirname, 'todos.json');

// Helper function to read the todos from the file
const readTodosFromFile = () => {
    if (fs.existsSync(todosFilePath)) {
        const fileData = fs.readFileSync(todosFilePath, 'utf8');
        return JSON.parse(fileData);
    }
    return []; // Return empty array if file doesn't exist
};

// Helper function to write todos to the file
const writeTodosToFile = (todos) => {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), 'utf8');
};

// GET method to retrieve all TODOs
app.get('/', (req, res) => {
    const todos = readTodosFromFile();
    res.json(todos);
});

// POST method to add a new TODO
app.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const todos = readTodosFromFile();
    const newTodo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);

    writeTodosToFile(todos);
    res.status(201).json(newTodo);
});

// PUT method to update a TODO (mark as completed or change title)
app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todos = readTodosFromFile();
    const todo = todos.find(todo => todo.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    if (title) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    writeTodosToFile(todos);
    res.json(todo);
});

// DELETE method to remove a TODO
app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const todos = readTodosFromFile();
    const index = todos.findIndex(todo => todo.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    todos.splice(index, 1);
    writeTodosToFile(todos);
    res.status(204).end();
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
