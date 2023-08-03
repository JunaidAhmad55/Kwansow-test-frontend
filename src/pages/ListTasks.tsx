import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/StyledCard";
import  StyledLink  from "../components/StyledLink";

interface Task {
  id: number;
  name: string;
}

const ListTasks: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    const storedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <h2>List of Tasks</h2>
      <StyledLink to="/create-task">Create New Task</StyledLink>
      {tasks?.map((task, index) => (
        <Card key={index} task={task.name} />
      ))}
    </div>
  );
};

export default ListTasks;
