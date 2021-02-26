import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/41130364?s=460&u=01388c7e1ce88021742810b20797bfb8a0219d97&v=4" alt="Gabriel Oliveira" />
      <div>
        <strong>Gabriel</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
