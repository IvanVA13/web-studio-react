import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.scss';

const Backdrop = ({ children, closeFunc, toggle }) => {
  const backdropClick = useCallback(
    e => {
      if (
        (e.code === 'Escape' && toggle) ||
        e.target === e.currentTarget ||
        e?.target?.attributes?.name?.value === 'close'
      ) {
        closeFunc();
      }
    },
    [toggle, closeFunc],
  );

  useEffect(() => {
    window.addEventListener('keydown', backdropClick);
    return () => {
      window.removeEventListener('keydown', backdropClick);
    };
  }, [backdropClick]);
  return (
    <div
      onClick={backdropClick}
      className={`${styles.backdrop} ${
        !toggle ? styles['backdrop--is-hidden'] : ''
      }`}
    >
      {children}
    </div>
  );
};
Backdrop.propTypes = {
  children: PropTypes.node,
  closeFunc: PropTypes.func,
  toggle: PropTypes.bool,
};

export default Backdrop;
