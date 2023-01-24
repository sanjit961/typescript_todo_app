import React from "react";
interface todos {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
interface todosProps {
  todo: todos[];
}

export const Todos: React.FC<todosProps> = ({ todo }: todosProps) => {
  return (
    <>
      <div>
        <h2>***DEMO TODO LIST FROM API***</h2>
        {todo.map((item) => {
          return (
            <>
              <h4>Completed = {item.completed ? "Yes" : "No"}</h4>
              <h4>id = {item.id}</h4>
              <h4>title = {item.title}</h4>
              <h4>userId = {item.userId}</h4>
              <h6>*************************</h6>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Todos;
