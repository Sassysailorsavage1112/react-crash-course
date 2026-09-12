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
 <Todo 
 title= "Finish Frontend Simplified" 
 paragraph= "Code along with the Frontend Simplified step by step."
 />
 <Todo 
 title= "Finish the Interview Section on Frontend Simplified"
 paragraph= "Finish every interview question in the next 4 weeks." />
 <Todo
  title= "Land a > $150,000k job that I love"
  paragraph= "Apply to 100 jobs." />
</div>
{/* <Modal /> */}
    </>
  );
}

export default App;
