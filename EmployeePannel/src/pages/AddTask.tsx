import React from "react";
import AddTaskBord from "../components/AddTaskBord";

const AddTask: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">My Task</h1>
      <AddTaskBord/>
    </div>
  );
};

export default AddTask;
