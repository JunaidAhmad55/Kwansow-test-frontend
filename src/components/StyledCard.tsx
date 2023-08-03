import React, { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

interface TaskCardProps {
  task: string;
  children?: ReactNode;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, children }) => {
  return (
    <Card>
      {children}
      <p>{task}</p>
    </Card>
  );
};

export default TaskCard;
