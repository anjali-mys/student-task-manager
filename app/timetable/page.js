
"use client";

const timetable = [
  {
    day: "Monday",
    subjects: [
      { time: "9:00 - 10:00", subject: "Java Programming", room: "Room 101" },
      { time: "10:00 - 11:00", subject: "Mathematics", room: "Room 102" },
      { time: "11:30 - 12:30", subject: "Operating Systems", room: "Lab 1" },
    ],
  },
  {
    day: "Tuesday",
    subjects: [
      { time: "9:00 - 10:00", subject: "Data Structures", room: "Room 103" },
      { time: "10:00 - 11:00", subject: "DBMS", room: "Room 104" },
      { time: "11:30 - 12:30", subject: "Java Programming", room: "Lab 2" },
    ],
  },
  {
    day: "Wednesday",
    subjects: [
      { time: "9:00 - 10:00", subject: "Operating Systems", room: "Room 102" },
      { time: "10:00 - 11:00", subject: "Mathematics", room: "Room 101" },
      { time: "11:30 - 12:30", subject: "Data Structures", room: "Lab 1" },
    ],
  },
  {
    day: "Thursday",
    subjects: [
      { time: "9:00 - 10:00", subject: "DBMS", room: "Room 104" },
      { time: "10:00 - 11:00", subject: "Java Programming", room: "Room 101" },
      { time: "11:30 - 12:30", subject: "Mathematics", room: "Room 102" },
    ],
  },
  {
    day: "Friday",
    subjects: [
      { time: "9:00 - 10:00", subject: "Data Structures", room: "Lab 1" },
      { time: "10:00 - 11:00", subject: "Operating Systems", room: "Room 103" },
      { time: "11:30 - 12:30", subject: "DBMS", room: "Room 104" },
    ],
  },
];

export default function TimetablePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900 md:p-10">
      <div className="mx-auto max-w-5xl">

        <a href="/" className="font-semibold text-indigo-600">
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          My Timetable 📅
        </h1>

        <p className="mt-2 text-gray-600">
          Your weekly class schedule.
        </p>

        <div className="mt-8 space-y-6">
          {timetable.map((day) => (
            <section
              key={day.day}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-xl font-bold text-indigo-600">
                {day.day}
              </h2>

              <div className="space-y-3">
                {day.subjects.map((item) => (
                  <div
                    key={item.time}
                    className="flex flex-wrap justify-between gap-3 rounded-lg bg-indigo-50 p-4"
                  >
                    <div>
                      <h3 className="font-semibold">
                        {item.subject}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.room}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-700">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  );
}
