import { useFech } from "../hooks/useFech";
import styles from './UsersComponent.module.css';

const UsersComponent = () => {
    const { data: users, isLoading, error } = useFech('https://jsonplaceholder.typicode.com/users');

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Cargando usuarios...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <span className={styles.errorIcon}>⚠️</span>
                <p>Error al cargar los usuarios: {error}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lista de Usuarios</h2>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Ciudad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user.id} className={styles.tableRow}>
                                <td className={styles.tableCell}>{user.id}</td>
                                <td className={styles.tableCell}>{user.name}</td>
                                <td className={styles.tableCell}>
                                    <a href={`mailto:${user.email}`} className={styles.emailLink}>
                                        {user.email}
                                    </a>
                                </td>
                                <td className={styles.tableCell}>{user.address?.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersComponent;