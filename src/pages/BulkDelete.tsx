import React from "react";
import Card from "../components/StyledCard";
import { Button } from "../components/StyledButton";

interface TaskList {
    id: number;
    name: string;
    checked: boolean;
}
interface Task {
    id: number;
    name: string;
}

const BulkDelete: React.FC = () => {
    const [tasks, setTasks] = React.useState<TaskList[]>([]);

    React.useEffect(() => {
        const storedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(
            storedTasks?.map((task: Task, index: number) => ({
                id: task?.id,
                name: task?.name,
                checked: false,
            }))
        );
    }, []);

    const handleDelete = () => {
        const remainingTasks = tasks
            .filter((task) => !task.checked)
            .map(({ checked, ...rest }) => rest);
        localStorage.setItem("tasks", JSON.stringify(remainingTasks));
        setTasks(
            remainingTasks?.map((task: Task, index: number) => ({
                id: task?.id,
                name: task?.name,
                checked: false,
            }))
        );
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        taskId: number
    ) => {
        const checked = event.target.checked;
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, checked } : task
            )
        );
    };

    return (
        <div>
            <h2>Bulk Delete Tasks</h2>
            <Button color="danger" onClick={handleDelete}>Delete Checked Tasks</Button>
            {tasks.map((task) => (
                <Card key={task.id} task={task.name}>
                    <label>
                        <input
                            type="checkbox"
                            checked={task.checked}
                            onChange={(e) => handleCheckboxChange(e, task.id)}
                        />
                    </label>
                </Card>
            ))}
        </div>
    );
};

export default BulkDelete;
