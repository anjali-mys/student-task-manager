
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load saved tasks when the app opens
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem("studentTasks");

      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Could not load tasks:", error);
    }

    setLoaded(true);
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("studentTasks", JSON.stringify(tasks));
    }
  }, [tasks, loaded]);

  function addTask(task) {
    setTasks((previousTasks) => [
      ...previousTasks,
      {
        ...task,
        id: Date.now(),
        completed: false,
      },
    ]);
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider");
  }

  return context;
}
