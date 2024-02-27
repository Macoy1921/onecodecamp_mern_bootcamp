import React, { useState } from "react";

const TodoListComponent = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [updatedTodo, setUpdatedTodo] = useState('');
    const [targetIndex, setTargetIndex] = useState(null);

    const createTodo = () => {
        if (todo.trim()){
            setTodoList([...todoList, todo]);
            setTodo('');
        }
    }
    
    const updateTodo = (index) => {
        if (updatedTodo.trim()){
            const updatedTodoList = [...todoList];
            updatedTodoList[index] = updatedTodo;
            setTodoList(updatedTodoList);
            setUpdatedTodo('');
            setTargetIndex(null);
        }
    }

    const deleteTodo = (index) => {
        const currentTodoList = [...todoList];
        const updatedTodoList = currentTodoList.filter((todo, todoIndex) => todoIndex !== index);
        setTodoList(updatedTodoList);
    }
    
    return (
        <div>
           <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
           <button onClick={createTodo}>Add Task</button>

           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Todo</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todo, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>
                            {targetIndex === index ? ( 
                                <input type="text" value={updatedTodo} onChange={(event) => setUpdatedTodo(event.target.value)}/>
                            ) : (
                                todo
                            )}
                        </td>
                        <td>
                            {targetIndex === index ? (
                                <button onClick={() => updateTodo(index)}>Save</button>
                            ) : (
                                <button onClick={() => {
                                    setUpdatedTodo(todo);
                                    setTargetIndex(index);
                                }}>Edit Task</button>
                            )}
                        </td>
                        <td>
                            <button onClick={() => deleteTodo(index)}>Delete Task</button>
                        </td>
                    </tr>
                ))} 
            </tbody>
            </table>
        </div>
    );
}

export default TodoListComponent;