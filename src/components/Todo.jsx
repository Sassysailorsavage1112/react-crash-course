import './Todo.css'

function Todo({title, paragraph}) {
    function deleteTodo(id) {
   console.log('deletTodo()', title
    }

    return(
       <div className="todo">
  <h2>{ title }</h2>
  <p>{paragraph}</p>
  <button onClick={ () => deleteTodo(1)}>Delete</button>
 </div>
    ); 
}

export default Todo