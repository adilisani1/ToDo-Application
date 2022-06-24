import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

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
  const [todoId, setTodoId] = useState(4);

  //Add todos
  const addTodo = (todo) => {

    setTodos([...todos, {
      id: todoId,
      title: todo,
      isComplete: false,
    },]);

    setTodoId(previousTodoId => previousTodoId + 1);
  }

  //Delete Todo Handler
  const deleteTodoHandler = (id) => {
    console.log(id);
    setTodos([...todos].filter(todo => todo.id !== id))
  }


  const clearTodo = () => {
    setTodos([])
  }

  //Save todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <div className="col-12 col-lg-7 shadow p-5">

      <h1 className="text-center text-muted">Todo App</h1>


      <TodoForm
        addTodo={addTodo}
        handleClearTodo={clearTodo} />


      <ul className="list-todo">
        {todos.map(todo => (
          <li className="todo-item">{todo.title}
            <i class="fa-regular fa-trash-can fa-sm" onClick={() => deleteTodoHandler(todo.id)}></i>
          </li>
        ))}

      </ul>

      {/* <table className="table">
        <tbody>

          {todos.map(todo => (

            <tr key={todo.id}>

              <td>
                {todo.title}
              </td>

              <td></td>

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

      </table> */}




    </div >
  );
};

export default TodoApp;
