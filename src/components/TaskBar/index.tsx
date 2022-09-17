import { useState } from "react";
import styles from "./TaskBar.module.css";

export function TaskBar() {
  const [task, setTask] = useState("");

  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }

    console.log(task);

    setTask("");
  };

  return (
    <div className="maxContainer">
      <form onClick={handleAddNewTask} className={styles.container}>
        <input
          value={task}
          onChange={handleChangeTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="task"
          className={styles.input}
        />
        <button className={styles.button}>
          Criar
          <img src="/plus.svg" alt="Criar" />
        </button>
      </form>
    </div>
  );
}
