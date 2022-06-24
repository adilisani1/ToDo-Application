import React, { useState } from 'react';

const TodoForm = ({ addTodo, handleClearTodo }) => {

    const [todoInput, setTodoInput] = useState('');


    const todoChangeHandler = (e) => {
        setTodoInput(e.target.value)

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoInput === '') {
            return
        }

        setTodoInput('');
        addTodo(todoInput)
    }

    return (

        <div className="form-container">
            <input
                type="text"
                className="form-control"
                placeholder="What do you need to do?"
                value={todoInput}
                onChange={todoChangeHandler}
            />

            <div className="btn-g mb-3">
                <button className="btn" onClick={handleSubmit}>Add Todo</button>
                <button className="btn" onClick={handleClearTodo}>Clear Todo</button>
            </div>
        </div >



    );
}

export default TodoForm;