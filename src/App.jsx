import logo from './logo.svg';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import "./App.css";
import Modal from './components/Modal.jsx'
function App() {
  return (
    <>
 <Title />
 <div className="todo__wrapper">
 <Todo title= "Finish Frontend Simplified" />
 <Todo title= "Finish the Interview Section on Frontend Simplified" />
 <Todo title= "Land a > $150,000k job that I love" />
</div>
{/* <Modal /> */}
    </>
  );
}

export default App;
