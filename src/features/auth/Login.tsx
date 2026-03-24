import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import api from '../../api/axios';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const from = (location.state as any)?.from || '/dashboard';

  useEffect(() => {
    if (state.user) {
      console.log('REDIRECTION vers', from);
      navigate(from, { replace: true });
    }
  }, [state.user, navigate, from]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('CLICK LOGIN');

    dispatch({ type: 'LOGIN_START' });

    try {
      console.log('REQUETE API...');
      const { data: users } = await api.get(`/users?email=${email}`);
      console.log('USERS =', users);

      if (users.length === 0 || users[0].password !== password) {
        console.log('ERREUR IDENTIFIANTS');
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: 'Email ou mot de passe incorrect',
        });
        return;
      }

      const { password: _, ...user } = users[0];
      console.log('LOGIN SUCCESS', user);

      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      console.log('ERREUR SERVEUR', error);
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Erreur serveur' });
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>TaskFlow</h1>
        <p className={styles.subtitle}>Connectez-vous pour continuer</p>

        {state.error && <div className={styles.error}>{state.error}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <button
          type="submit"
          className={styles.button}
          disabled={state.loading}
        >
          {state.loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
}