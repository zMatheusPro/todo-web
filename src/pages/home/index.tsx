import { useState } from "react";
import { Header } from "../../components/Header";
import { TaskBar } from "../../components/TaskBar";
import styles from "./home.module.css";

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
  createdAt: Date;
  completedAt: Date;
}

export function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className={styles.container}>
      <Header />
      <TaskBar />
    </div>
  );
}
