const Todo = props => {
  return (
    <div
      className="Todo"
      style={{border: '1px solid #000', padding: '20px', marginBottom: '10px'}}
    >
      <p>
        {props.todo.task}: {props.todo.completed ? 'Сделано' : 'Не сделано'}
        <button
          key={props.todo.id}
          onClick={() => {
            props.toggleComplete(props.todo)
          }}
        >
          Сделать
        </button>
      </p>

      <div>Описание: {props.todo.description}</div>
    </div>
  )
}

export default Todo
