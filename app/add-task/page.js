
"use client";

import { useState } from "react";
import { useTasks } from "../../context/TaskContext";

export default function AddTaskPage() {
  const { addTask } = useTasks();

  const [form, setForm] = useState({
    title: "",
    subject: "",
    deadline: "",
    priority: "Medium",
  });

  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTask(form);

    setMessage("Task added successfully!");

    setForm({
      title: "",
      subject: "",
      deadline: "",
      priority: "Medium",
    });
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900 md:p-10">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="font-semibold text-indigo-600">
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          Add New Task ✨
        </h1>

        <p className="mt-2 text-gray-600">
          Add your assignments and never miss a deadline.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 rounded-2xl bg-white p-6 shadow-sm md:p-8"
        >
          <div>
            <label className="mb-2 block font-semibold">
              Task Title
            </label>

            <input
              type="text"
              required
              placeholder="Enter task name"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Subject
            </label>

            <select
              required
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 p-3"
            >
              <option value="">Select Subject</option>
              <option value="Java Programming">Java Programming</option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="Data Structures">Data Structures</option>
              <option value="DBMS">DBMS</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Deadline
            </label>

            <input
              type="date"
              required
              value={form.deadline}
              onChange={(e) =>
                setForm({ ...form, deadline: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Priority
            </label>

            <select
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 p-3"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-700"
          >
            + Add Task
          </button>

          {message && (
            <p className="text-center font-semibold text-green-600">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
