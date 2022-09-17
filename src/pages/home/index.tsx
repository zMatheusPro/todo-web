import { useState } from "react";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskBar } from "../../components/TaskBar";
import { TaskEmpty } from "../../components/TaskEmpty";
import styles from "./home.module.css";

interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
  createdAt: Date;
  completedAt?: Date;
}

export function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasks = tasks.filter((task) => task.isCompleted);

  const handleChangeTaskStatus = (id: string) => {
    setTasks((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
            completedAt: new Date(),
          };
        }

        return task;
      });
    });
  };

  const handleDeleteTask = (id: string) => {
    setTasks((oldTasks) => {
      return oldTasks.filter((task) => task.id !== id);
    });
  };

  const handleAddTask = (task: string) => {
    setTasks((oldTasks) => {
      return [
        ...oldTasks,
        {
          id: String(new Date().getTime()),
          task,
          isCompleted: false,
          createdAt: new Date(),
        },
      ];
    });
  };

  return (
    <div className={styles.container}>
      <Header />
      <TaskBar handleAddTask={handleAddTask} />
      <div className="maxContainer">
        <div className={styles.tasksContainer}>
          <div className={styles.taskHeader}>
            <h2 className={styles.taskHeaderTitle}>
              Tarefas criadas
              <span>{tasks.length}</span>
            </h2>

            <h2 className={styles.taskHeaderTitle}>
              Concluídas
              <span>
                {tasks.length > 0
                  ? `${completedTasks.length} de ${tasks.length}`
                  : 0}
              </span>
            </h2>
          </div>

          <div className={styles.taskList}>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  {...task}
                  handleDeleteTask={handleDeleteTask}
                  handleChangeTaskStatus={handleChangeTaskStatus}
                />
              ))
            ) : (
              <TaskEmpty />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
