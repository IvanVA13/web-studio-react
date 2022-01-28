import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children, type }) =>
  type !== 'hide' ? (
    <div
      className={
        (type === 'main' && styles['container__hero']) ||
        (!type && styles.container) ||
        (type === 'footer' &&
          `${styles.container} ${styles['container__footer']}`) ||
        (type === 'order' &&
          `${styles.container} ${styles['container__order']}`)
      }
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );

Container.defaultProps = {
  main: false,
};

Container.propTypes = {
  main: PropTypes.bool,
};

export default Container;
