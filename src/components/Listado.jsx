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
        { nombre: "Introducción a React", visto: true },
        { nombre: "Componentes y Props", visto: true },
        { nombre: "Estados y Ciclo de Vida", visto: true },
        { nombre: "Eventos y Formularios", visto: false },
        { nombre: "Hooks y Context", visto: false },
        { nombre: "Rutas y Navegación", visto: false },
        { nombre: "Testing en React", visto: false },
        { nombre: "Performance y Optimización", visto: false },
        { nombre: "Integración con APIs", visto: false },
        { nombre: "Manejo de Estado Avanzado", visto: false },
        { nombre: "Proyecto Final", visto: false },
        { nombre: "Deploy y Despliegue", visto: false },
    ];
    const [temas, setTemas] = useState(listaItems);

    return (
        <div className={styles.listaTemas}>
            <h2 className={styles.titulo}>Lista de Temas que cubren React Js</h2>
            <AddTask addTask={setTemas}/>
            <ol className={styles.lista}>
                {temas.map((tema, index) => (
                    <Temas key={index} nombre={tema.nombre} visto={tema.visto} />
                ))}
            </ol>
        </div>
    );
}
export default Listado;