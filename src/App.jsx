import logo from './logo.svg';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import './App.css';
import Modal from './components/Modal.jsx';
import React, { useState } from 'react';

function App() {
/**
 * 1. Create a "Counter.jsx" component
 * 2. Create a default 'count' of 0
 * 3. Create a button to increment 'count' by 1 
 * 4. Createa button to decrement 'count' by 1
 * 5. Import your Counter in App.jsx and test it
 * /
  return <Counter />

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Title />

      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>

      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish the Interview Section on Frontend Simplified" />
        <Todo title="Land a > $150,000k job that I love" />
      </div>
      {true && <Modal title="Confirm Delete?" />}
    </div>
  );
}

export default App;