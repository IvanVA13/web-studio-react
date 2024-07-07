import styles from './Confirm.module.scss';
import Backdrop from '../Wrappers/Backdrop';
const Confirm = ({
  confirmBtnType = 'button',
  title = 'Some tittle',
  confirmAct = () => {},
  closeModal = () => {},
  posAbsolute = false,
}) => {
  const componentBody = (
    <div className={`${styles.confirm} ${posAbsolute && styles.absolute}`}>
      <h3 className={styles['confirm-title']}>{title}</h3>
      <ul className={styles['confirm-list']}>
        <li className={styles['confirm-item']}>
          <button
            className={`${styles.button} ${styles['confirm-btn']} ${
              posAbsolute && styles['absolute-btn']
            }`}
            type={confirmBtnType}
            onClick={confirmAct}
          >
            Да
          </button>
        </li>
        <li className={styles['confirm-item']}>
          <button
            className={`${styles.button} ${styles['confirm-btn']} ${
              posAbsolute && styles['absolute-btn']
            }`}
            type="button"
            onClick={closeModal}
          >
            Нет
          </button>
        </li>
      </ul>
    </div>
  );

  if (posAbsolute) {
    return (
      <Backdrop toggle closeFunc={closeModal}>
        {componentBody}
      </Backdrop>
    );
  }
  return componentBody;
};

export default Confirm;
