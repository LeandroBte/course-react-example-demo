import { useState } from "react";
import styles from './AddTask.module.css';

export const AddTask = ({ addTask }) => {
    const [task, setTask] = useState('');

    const onChangeTask = (e) => {
        setTask(e.target.value);
    }

    const onSubmitTask = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;
        
        const newTask = { nombre: task, visto: false };
        addTask(temas => [...temas, newTask]);
        setTask('');
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Agregar Tarea</h2>
            <form onSubmit={onSubmitTask} className={styles.form}>
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea..."
                    value={task}
                    onChange={onChangeTask}
                    className={styles.input}
                    autoFocus
                />
                <button type="submit" className={styles.button}>
                    Agregar Tarea
                </button>
            </form>
        </div>
    )
}