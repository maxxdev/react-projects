import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy a bread'},
    {id: 2, completed: false, title: 'Buy a milk'},
    {id: 3, completed: false, title: 'Buy a chocolate'}
  ])


  function toggleTodo(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        {todos.length
          ? <TodoList todos={todos} onToggle={toggleTodo}/>
          : <p>No Todos</p>}

      </div>
    </Context.Provider>
  )
}

export default App;
