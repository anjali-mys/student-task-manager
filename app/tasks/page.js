
"use client";

import { useState } from "react";
import { useTasks } from "../../context/TaskContext";

export default function TasksPage() {
  const { tasks, toggleTask } = useTasks();
  const [selectedSubject, setSelectedSubject] = useState("All");

  const subjects = [
    "All",
    ...new Set(tasks.map((task) => task.subject)),
  ];

  const filteredTasks =
    selectedSubject === "All"
      ? tasks
      : tasks.filter((task) => task.subject === selectedSubject);

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900 md:p-10">
      <div className="mx-auto max-w-5xl">

        <a
          href="/"
          className="font-semibold text-indigo-600"
        >
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          My Tasks 📚
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your assignments and deadlines.
        </p>

        <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
          <p className="text-gray-600">Completed Tasks</p>
          <h2 className="mt-2 text-3xl font-bold text-indigo-600">
            {completedCount} / {tasks.length}
          </h2>
        </div>

        <div className="mt-8">
          <label className="mb-2 block font-semibold">
            Filter by Subject
          </label>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 md:w-72"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 space-y-4">
          {filteredTasks.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-lg font-semibold">
                No tasks found.
              </p>
              <p className="mt-2 text-gray-500">
                Add a task to get started!
              </p>
              <a
                href="/add-task"
                className="mt-4 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                + Add Task
              </a>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div>
                  <h3
                    className={`font-semibold ${
                      task.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-900"
                    }`}
                  >
                    {task.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {task.subject} · Deadline: {task.deadline}
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Priority: {task.priority}
                  </p>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 accent-indigo-600"
                  />
                  Done
                </label>
              </div>
            ))
          )}
        </div>

        <a
          href="/add-task"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          + Add New Task
        </a>

      </div>
    </main>
  );
}
