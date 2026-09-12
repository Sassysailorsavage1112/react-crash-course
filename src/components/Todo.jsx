import './Todo.css'

function Todo({title, paragraph}) {
    function deleteTodo() {
   console.log('deletTodo()')
    }

    return(
       <div className="todo">
  <h2>{ title }</h2>
  <p>{paragraph}</p>
  <button onClick={deleteTodo()}>Delete</button>
 </div>
    ); 
}

export default Todo