import { useState } from 'react';
import Modal from '../Modal';
import Section from '../Wrappers/Section/Section';
import styles from './Hero.module.scss';

const Hero = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleClick = () => {
    setToggleModal(prevToggle => !prevToggle);
  };
  return (
    <Section
      type="main"
      container="main"
      title="Эффективные решения для вашего бизнеса"
    >
      <button
        className={`${styles.button} ${styles['hero__button']}`}
        type="button"
        onClick={handleClick}
      >
        Заказать услугу
      </button>
      {toggleModal && <Modal handleClick={handleClick} />}
    </Section>
  );
};

export default Hero;
