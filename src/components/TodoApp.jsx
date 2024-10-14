import UsersApi from "./UsersApi";
import TodoTask from "./TodoTask";

const TodoApp = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-5 text-2xl text-center">Lista de tareas</h1>
      <div className="flex mb-5 space-x-4">
        <TodoTask />
        <UsersApi />
      </div>
    </div>
  );
};

export default TodoApp;
