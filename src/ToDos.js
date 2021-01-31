const CText = ({ completed, title }) => {
  if (completed) return <del>{title}</del>;
  else return title;
};

const ToDos = ({ todos, deleteToDo, handleChecked }) => {
  if (!todos.length)
    return (
      <ul className="list-group">
        <li className="list-group-item text-center">No To Do yet 😪</li>
      </ul>
    );
  else {
    const todoList = todos.map((todo) => {
      return (
        <li
          className="list-group-item d-flex justify-content-between"
          key={todo.id}
        >
          <div>
            <input
              onChange={() => {
                handleChecked(todo);
              }}
              checked={todo.completed}
              className="form-check-input me-2"
              type="checkbox"
            />
            <CText completed={todo.completed} title={todo.title} />
          </div>

          <button
            className="to-do-btn text-danger"
            onClick={() => deleteToDo(todo.id)}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </li>
      );
    });
    return <ul className="list-group">{todoList}</ul>;
  }
};

export default ToDos;
