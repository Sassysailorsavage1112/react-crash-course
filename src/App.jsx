import logo from './logo.svg';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'

function App() {
  return (
    <div>
 <Title />
 <div className="todo-__wrapper">
 <Todo></Todo>
 <Todo></Todo>
 <Todo></Todo>
</div>
    </div>
  );
}

export default App;
