
"use client";

import { useTasks } from "../context/TaskContext";

export default function Home() {
  const { tasks, toggleTask } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900 md:p-10">
      <div className="mx-auto max-w-6xl">

        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Student Dashboard 🎓
            </h1>
            <p className="mt-2 text-gray-600">
              Stay organized and achieve your goals!
            </p>
          </div>

          <a
            href="/add-task"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white"
          >
            + Add Task
          </a>
        </header>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard title="Total Tasks" value={tasks.length} />
          <SummaryCard title="Completed" value={completedTasks} />
          <SummaryCard title="Pending" value={pendingTasks.length} />
          <SummaryCard title="Progress" value={`${progress}%`} />
        </div>

        <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">My Tasks</h2>

          {tasks.length === 0 ? (
            <p className="mt-5 text-gray-500">
              No tasks yet. Add your first task!
            </p>
          ) : (
            <div className="mt-5 space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4"
                >
                  <div>
                    <h3 className="font-semibold">
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {task.subject} · {task.deadline}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={!!task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 accent-indigo-600"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Overall Progress</h2>

          <div className="mt-4 h-4 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-gray-600">
            {progress}% of your tasks completed
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-6">
  <a
    href="/tasks"
    className="font-semibold text-indigo-600"
  >
    View All Tasks →
  </a>

  <a
    href="/timetable"
    className="font-semibold text-indigo-600"
  >
    View Timetable →
  </a>
</div>

      </div>
    </main>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="text-gray-500">{title}</p>
      <h2 className="mt-2 text-3xl font-bold text-indigo-600">
        {value}
      </h2>
    </div>
  );
}
