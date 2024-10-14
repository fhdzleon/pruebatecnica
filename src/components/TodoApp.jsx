import UsersApi from "./UsersApi";
import TodoTask from "./TodoTask";

const TodoApp = () => {
  return (
    <div>
      <div className="flex flex-col mb-5">
        <UsersApi />
        <h1 className="text-2xl">Lista de tareas</h1>
      </div>
      <div>
        <TodoTask />
      </div>
    </div>
  );
};

export default TodoApp;
