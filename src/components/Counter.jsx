import { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        setCount(count - 1);
    };
    
    const reset = () => {
        setCount(0);
    };

    return (
        <div className={styles.counterContainer}>
            <h1 className={styles.title}>Contador</h1>
            <p className={styles.count}>{count}</p>
            <div className={styles.buttonsContainer}>
                <button 
                    onClick={increment} 
                    disabled={count >= 10}
                    className={`${styles.button} ${styles.increment}`}
                >
                    Incrementar
                </button>
                <button 
                    onClick={decrement} 
                    disabled={count <= 0}
                    className={`${styles.button} ${styles.decrement}`}
                >
                    Decrementar
                </button>
                <button 
                    onClick={reset} 
                    disabled={count === 0}
                    className={`${styles.button} ${styles.reset}`}
                >
                    Resetear
                </button>
            </div>
        </div>
    );
};

export default Counter;