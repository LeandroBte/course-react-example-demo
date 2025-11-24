// Lista de tareas para practicar reducer
import { useReducer, useState } from "react";

const TaskList = () => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [newTask, setNewTask] = useState('');  
    const taskReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TASK':
                return [...state, action.payload];
            case 'DELETE_TASK':
                return state.filter(task => task.id !== action.payload);
            default:
                return state;
        }
    }
    
  return (
    <>
    <h2>Lista de tareas</h2>
    <ul>
        {tasks.map(task => (
            <li key={task.id}>
                {task.name}
                <button 
                    onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                >Eliminar</button>
            </li>
        ))}
    </ul>
    <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
    />
    <button 
        onClick={() => dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), name: newTask } })}
    >Agregar tarea</button>
    </>
  )
}

export default TaskList