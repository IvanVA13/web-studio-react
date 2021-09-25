import { useState } from 'react';
import Modal from '../Modal';

const Hero = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleClick = () => {
    setToggleModal(prevToggle => !prevToggle);
  };
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Эффективные решения для вашего бизнеса</h1>
        <button
          className="button hero__button"
          data-modal-open
          type="button"
          onClick={handleClick}
        >
          Заказать услугу
        </button>
      </div>
      {toggleModal && <Modal handleClick={handleClick} />}
    </section>
  );
};

export default Hero;
