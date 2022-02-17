import { useSelector } from 'react-redux';

import { getUser } from '../../redux/auth';
import styles from './User.module.scss';

const User = ({ sexRend }) => {
  const { firstName, lastName, sex, email, avatarUrl } = useSelector(getUser);
  return (
    <ul className={styles['user-list']}>
      <li className={styles['user-item']}>
        <div className={styles['user-wrapper']}>
          <img
            src={avatarUrl}
            alt="user avatar"
            className={`${styles.image} ${styles['user-avatar']}`}
          />
        </div>
      </li>
      <li className={styles['user-item']}>
        <div className={styles['user-data']}>{`${firstName} ${lastName}`}</div>
        <div className={styles['user-data']}>{email}</div>
        {sexRend ? (
          <div className={styles['user-data']}>
            {sex === 'male' ? 'Мужчина' : 'Женщина'}
          </div>
        ) : (
          ''
        )}
      </li>
    </ul>
  );
};

export default User;
