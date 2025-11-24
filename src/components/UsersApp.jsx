import { useEffect, useState } from "react";
import styles from './UsersApp.module.css';

const UsersApp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('No se pudo cargar la lista de usuarios');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
      console.error('Error al cargar usuarios:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Usuarios</h1>
      <button 
        className={styles.loadButton} 
        onClick={fetchUsers}
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Actualizar Usuarios'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
      
      {loading && users.length === 0 ? (
        <p className={styles.loading}>Cargando usuarios...</p>
      ) : (
        <ul className={styles.userList}>
          {users.map(user => (
            <li key={user.id} className={styles.userCard}>
              <h3 className={styles.userName}>{user.name}</h3>
              <p className={styles.userEmail}>{user.email}</p>
              <p><strong>Teléfono:</strong> {user.phone}</p>
              <p><strong>Ciudad:</strong> {user.address?.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersApp;