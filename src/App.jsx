import logo from './logo.svg';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import "./App.css";
import Modal from './components/Modal.jsx'
function App() {
  return (
    <div>
 <Title />
 <div>
  <input type="text" onChange={(event) => {
console.log(event.target.value)
  }} />
  <button>Add todo</button>
  </div>
 <div className="todo__wrapper">
 <Todo 
 title= "Finish Frontend Simplified" />
 <Todo 
 title= "Finish the Interview Section on Frontend Simplified"/>
 <Todo
  title= "Land a > $150,000k job that I love"/>
</div>
<Modal title="Are you sure you want to delete?" />
    </div>
  );
}

export default App;
