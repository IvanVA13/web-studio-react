import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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
      <CSSTransition
        in={toggleModal}
        timeout={250}
        classNames="scale-anim3"
        unmountOnExit
      >
        <Modal handleClick={handleClick} toggle={toggleModal} />
      </CSSTransition>
    </Section>
  );
};

export default Hero;
