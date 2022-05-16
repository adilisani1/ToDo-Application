import './App.css';
import { useState } from 'react';


function App() {

  const [todos, setTodo] = useState([
    {

      id: 1,
      title: 'Finish React Series',
      isComplete: false,

    },
    {

      id: 2,
      title: 'Go Grocery',
      isComplete: true,

    },
    {

      id: 3,
      title: 'Take over world',
      isComplete: false,

    },
  ])

  return (
    <div className="container mt-5">
      <div className="col-12 col-lg-6 align-items-center justify-content-center">
        <h2>Todo App</h2>
        <form onSubmit="#">
          <input type="text" className="form-control" placeholder="What do you need to do?" />
        </form>
        <table class="table">
          <tbody>

            {todos.map(todo => (
              <tr>
                <td>
                  {todo.title}
                </td>
                <td><button type="button" class="btn-close btn-sm" aria-label="Close"></button></td>
              </tr>
            ))}








          </tbody>
        </table>
      </div>

    </div >
  );
}

export default App;
