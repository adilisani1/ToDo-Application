import React, { useState, useEffect } from "react";

const TodoApp = () => {

  const getLocalItems = () => {
    let items = localStorage.getItem('todos');

    if (items) {
      return JSON.parse(localStorage.getItem('todos'))
    } else {
      return [];
    }
  }

  const [todos, setTodos] = useState(getLocalItems());

  const [todoInput, setTodoInput] = useState('');

  const [todoId, setTodoId] = useState(4);

  //Input Change Event
  const todoChangeHandler = (event) => {
    setTodoInput(event.target.value)
  };

  //Add todos
  const addTodo = (e) => {
    e.preventDefault();

    if (todoInput === '') {
      return
    }

    setTodos([...todos, {
      id: todoId,
      title: todoInput,
      isComplete: false,
    },]);

    setTodoInput('');
    setTodoId(previousTodoId => previousTodoId + 1);
  }

  //Delete Todo Handler
  const deleteTodoHandler = (id) => {
    console.log(id);
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  //Save todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <div className="col-12 col-lg-7 shadow p-5  main_header">

      <h1>Todo</h1>
      <p>Little todo app</p>

      <input
        type="text"
        className="form-control"
        placeholder="What do you need to do?"
        value={todoInput}
        onChange={todoChangeHandler}
      />

      <button className="btn mb-3" onClick={addTodo}>
        Add Todo
      </button>

      <table className="table">

        <tbody>

          {todos.map(todo => (
            <tr key={todo.id}>

              <td>
                <input
                  type="checkbox" />
              </td>

              <td>{todo.title}</td>

              <td>
                <button
                  type="button"
                  className="btn-close btn-sm"
                  aria-label="Close"
                  onClick={() => deleteTodoHandler(todo.id)}>
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>


    </div >
  );
};

export default TodoApp;
