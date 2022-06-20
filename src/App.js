import React from 'react'

import Navbar from './components/navbar';
import TodoApp from './components/TodoApp'


function App() {

  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          <TodoApp />
        </div>

      </div>

    </React.Fragment>

  );
}

export default App;
