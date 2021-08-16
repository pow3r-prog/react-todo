import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'



function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 2, completed: false, title: 'Buy milk'},
    {id: 3, completed: false, title: 'Buy cheese'}
  ])

  function toggleTodo(id) {
    setTodos
      (todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ]))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1>React dev</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos!</p>}
        
      </div>
    </Context.Provider>
  );
}

export default App;
