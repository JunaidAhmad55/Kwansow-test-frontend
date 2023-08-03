import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import ListTasks from "./pages/ListTasks";
import CreateTask from "./pages/CreateTask";
import BulkDelete from "./pages/BulkDelete";

const AppWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Navigation = styled.nav`
  margin-bottom: 20px;

  a {
    margin-right: 10px;
    color: #007bff;
    text-decoration: none;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f2f2f2;
    }

    &:active {
      background-color: #d4d4d4;
    }

    &.active {
      background-color: #007bff;
      color: #fff;
    }
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Navigation>
          <Link to="/" >
            Home
          </Link>
          <Link to="/list-tasks" >
            List Tasks
          </Link>
          <Link to="/create-task" >
            Create Task
          </Link>
          <Link to="/bulk-delete" >
            Bulk Delete
          </Link>
        </Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-tasks" element={<ListTasks />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/bulk-delete" element={<BulkDelete />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
};

export default App;
