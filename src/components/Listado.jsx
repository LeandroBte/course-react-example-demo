import styles from './Listado.module.css';
import { useState } from 'react';
import { AddTask } from './AddTask';

const Temas = ({ nombre, visto }) => {
    return (
        <li className={styles.tema}>
            {nombre}
            <span className={visto ? styles.temaVisto : styles.temaNoVisto}>
                {visto ? '✅' : '⏳'}
            </span>
        </li>
    )
}


const Listado = () => { 

    let listaItems = [
        { id: 1, nombre: "Introducción a React", visto: true },
        { id: 2, nombre: "Componentes y Props", visto: true },
        { id: 3, nombre: "Estados y Ciclo de Vida", visto: true },
        { id: 4, nombre: "Eventos y Formularios", visto: false },
        { id: 5, nombre: "Hooks y Context", visto: false },
        { id: 6, nombre: "Rutas y Navegación", visto: false },
        { id: 7, nombre: "Testing en React", visto: false },
        { id: 8, nombre: "Performance y Optimización", visto: false },
        { id: 9, nombre: "Integración con APIs", visto: false },
        { id: 10, nombre: "Manejo de Estado Avanzado", visto: false },
        { id: 11, nombre: "Proyecto Final", visto: false },
        { id: 12, nombre: "Deploy y Despliegue", visto: false },
    ];
    const [temas, setTemas] = useState(listaItems);

    const onAddTask = (newTask) => {
        // Verificar si el tema ya existe (sin importar mayúsculas/minúsculas)
        const temaExistente = temas.some(tema => 
            tema.nombre.toLowerCase() === newTask.toLowerCase()
        );
        
        if (!temaExistente) {
            const newTaskItem = { 
                id: temas.length + 1, 
                nombre: newTask, 
                visto: false 
            };
            setTemas([...temas, newTaskItem]);
        } else {
            alert('¡Este tema ya está en la lista!');
        }
    }

    return (
        <div className={styles.listaTemas}>
            <h2 className={styles.titulo}>Lista de Temas que cubren React Js</h2>
            <AddTask addTask={onAddTask}/>
            <ol className={styles.lista}>
                {temas.map((tema) => (
                    <Temas key={tema.id} nombre={tema.nombre} visto={tema.visto} />
                ))}
            </ol>
        </div>
    );
}
export default Listado;