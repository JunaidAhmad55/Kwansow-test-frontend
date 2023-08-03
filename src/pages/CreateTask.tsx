import React from "react";
import { useNavigate } from "react-router-dom";
import StyledInput from "../components/StyledInput";
import { Button, ButtonContainer } from "../components/StyledButton";
import StyledLink from "../components/StyledLink";

interface Task {
    id: number;
    name: string;
}
const CreateTask: React.FC = () => {
    const navigate = useNavigate();
    const [taskName, setTaskName] = React.useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value);
    };

    const handleFormSubmit = () => {
        if (taskName.trim() !== "") {
            const storedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
            const newTaskId = storedTasks[storedTasks.length - 1]?.id + 1 || 0;
            const newTask = {
                id: newTaskId,
                name: taskName,
            };
            storedTasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
            navigate("/list-tasks");
        }
    };


    return (
        <div>
            <StyledLink to="/create-task">Create New Task</StyledLink>
            <StyledInput value={taskName} onChange={handleInputChange} />
            <ButtonContainer>
                <Button color="primary" onClick={handleFormSubmit}>Create Task</Button>
            </ButtonContainer>
        </div>
    );
};

export default CreateTask;
