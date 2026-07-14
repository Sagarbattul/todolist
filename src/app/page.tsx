"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    "Learn Git",
    "Learn GitHub Actions",
  ]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="max-w-xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">TaskFlow</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((item, index) => (
          <div
            key={index}
            className="border rounded p-3 flex justify-between"
          >
            <span>{item}</span>

            <button
              className="text-red-500"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}