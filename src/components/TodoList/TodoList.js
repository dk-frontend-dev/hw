import Todo from '../Todo/Todo'

const TodoList = ({todos, toggleComplete}) => {
  return (
    <div className="TodoList">
      {todos &&
        todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            toggleComplete={() => toggleComplete(todo, index)}
          />
        ))}
    </div>
  )
}

export default TodoList
