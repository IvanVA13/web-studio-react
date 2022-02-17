import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';
import Container from '../Container';

const Section = ({ type, container, title, children }) => {
  const getContainer = () => (
    <Container type={container}>
      {title && type === 'main' && (
        <h1 className={styles['hero__title']}>{title}</h1>
      )}
      {title && type !== 'main' && (
        <h2 className={styles['section__title']}>{title}</h2>
      )}
      {children}
    </Container>
  );
  if (type === 'main') {
    return <section className={styles.hero}>{getContainer()}</section>;
  }
  if (type === 'desktop') {
    return (
      <section
        className={`${styles.section} ${styles['section--pad-top']} ${styles['section--hidden']}`}
      >
        {getContainer()}
      </section>
    );
  }
  if (type === 'second') {
    return (
      <section className={`${styles.section} ${styles['section--bg-color']}`}>
        {getContainer()}
      </section>
    );
  }
  if (!type) {
    return <section className={styles.section}>{getContainer()}</section>;
  }
};
Section.defaultProps = {
  type: '',
  title: '',
  container: '',
};

Section.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  container: PropTypes.string,
};

export default Section;
