import styles from './FormCustom.module.css';
import { useForm } from '../hooks/useForm';

const FormCustom = () => {  

    const initialForm = {
        name: '',
        email: '',
        password: ''
    }

    const { handleChange, inputValue } = useForm(initialForm);

    const { name, email, password } = inputValue;

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }

  return (
    <section className={styles.formContainer}>
      <h2 className={styles.formTitle}>Formulario de Registro</h2>
      <form onSubmit={onSubmitForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nombre</label>
          <input 
            type="text" 
            className={styles.inputField}
            onChange={handleChange} 
            value={name} 
            placeholder="Ingrese su nombre" 
            id="name" 
            name="name"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            type="email" 
            className={styles.inputField}
            onChange={handleChange} 
            value={email} 
            placeholder="Ingrese su email" 
            id="email" 
            name="email"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input 
            type="password" 
            className={styles.inputField}
            onChange={handleChange} 
            value={password} 
            placeholder="Ingrese su contraseña" 
            id="password" 
            name="password"
            required
            minLength="6"
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>Registrarse</button>
      </form>
    </section>
  )
}

export default FormCustom