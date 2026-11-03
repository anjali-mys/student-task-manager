
import "./globals.css";
import { TaskProvider } from "../context/TaskContext";

export const metadata = {
  title: "Student Task Manager",
  description: "Manage your assignments and deadlines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
