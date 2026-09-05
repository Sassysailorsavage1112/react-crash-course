import logo from './logo.svg';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import "./App.css";
import Modal from './components/Modal.jsx'
function App() {
  return (
    <div>
 <Title />
 <div className="todo__wrapper">
 <Todo></Todo>
 <Todo></Todo>
 <Todo></Todo>
</div>
    </div>
  );
}

export default App;
