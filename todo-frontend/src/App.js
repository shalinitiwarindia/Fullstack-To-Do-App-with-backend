// // src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [todos, setTodos] = useState([]);
//     const [newTodo, setNewTodo] = useState('');
//     const [editingTodo, setEditingTodo] = useState(null);

//     // Fetch TODOs from the server
//     useEffect(() => {
//         axios.get('http://localhost:5000/')
//             .then(response => setTodos(response.data))
//             .catch(error => console.error('Error fetching todos:', error));
//     }, []);

//     // Add a new TODO
//     const addTodo = () => {
//         if (newTodo) {
//             axios.post('http://localhost:5000/', { title: newTodo })
//                 .then(response => {
//                     setTodos([...todos, response.data]);
//                     setNewTodo('');
//                 })
//                 .catch(error => console.error('Error adding todo:', error));
//         }
//     };

//     // Update TODO (mark as completed or change title)
//     const updateTodo = (id) => {
//         const updatedTodo = {
//             title: editingTodo.title,
//             completed: editingTodo.completed,
//         };

//         axios.put(`http://localhost:5000/${id}`, updatedTodo)
//             .then(response => {
//                 setTodos(todos.map(todo => todo.id === id ? response.data : todo));
//                 setEditingTodo(null);
//             })
//             .catch(error => console.error('Error updating todo:', error));
//     };

//     // Delete a TODO
//     const deleteTodo = (id) => {
//         axios.delete(`http://localhost:5000/${id}`)
//             .then(() => setTodos(todos.filter(todo => todo.id !== id)))
//             .catch(error => console.error('Error deleting todo:', error));
//     };

//     return (
//         <div className="App">
//             <h1>Todo List</h1>

//             {/* Add new todo */}
//             <input
//                 type="text"
//                 value={newTodo}
//                 onChange={(e) => setNewTodo(e.target.value)}
//                 placeholder="New Todo"
//             />
//             <button onClick={addTodo}>Add Todo</button>

//             {/* Display Todo list */}
//             <ul>
//                 {todos.map(todo => (
//                     <li key={todo.id}>
//                         {editingTodo?.id === todo.id ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     value={editingTodo.title}
//                                     onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
//                                 />
//                                 <button onClick={() => updateTodo(todo.id)}>Update</button>
//                             </>
//                         ) : (
//                             <>
//                                 <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                                     {todo.title}
//                                 </span>
//                                 <button onClick={() => setEditingTodo(todo)}>Edit</button>
//                                 <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//                             </>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);

    // Fetch TODOs from the server
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    // Add a new TODO
    const addTodo = () => {
        if (newTodo) {
            axios.post('http://localhost:5000/', { title: newTodo })
                .then(response => {
                    setTodos([...todos, response.data]);
                    setNewTodo('');
                })
                .catch(error => console.error('Error adding todo:', error));
        }
    };

    // Update TODO (mark as completed or change title)
    const updateTodo = (id) => {
        const updatedTodo = {
            title: editingTodo.title,
            completed: editingTodo.completed,
        };

        axios.put(`http://localhost:5000/${id}`, updatedTodo)
            .then(response => {
                setTodos(todos.map(todo => todo.id === id ? response.data : todo));
                setEditingTodo(null);
            })
            .catch(error => console.error('Error updating todo:', error));
    };

    // Delete a TODO
    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/${id}`)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
            .catch(error => console.error('Error deleting todo:', error));
    };

    return (
        <div className="App">
            <h1>Todo List</h1>

            {/* Add new todo */}
            <div className="todo-input">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="New Todo"
                />
                <button onClick={addTodo} disabled={!newTodo}>Add Todo</button>
            </div>

            {/* Display Todo list */}
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item">
                        {editingTodo?.id === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editingTodo.title}
                                    onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                                    placeholder="Edit Todo"
                                />
                                <button onClick={() => updateTodo(todo.id)}>Update</button>
                                <button onClick={() => setEditingTodo(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span className={todo.completed ? 'completed' : ''}>
                                    {todo.title}
                                </span>
                                <button onClick={() => setEditingTodo(todo)}>Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
