import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/list-tasks");
  }, [navigate]);

  return <div>Redirecting to list-tasks...</div>;
};

export default Home;
