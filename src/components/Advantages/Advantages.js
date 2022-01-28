import shortid from 'shortid';

import Section from '../Wrappers/Section';
import styles from './Advantages.module.scss';

const idGen = () => shortid.generate();

const initialState = [
  {
    title: 'Внимание к деталям',
    desc: 'Идейные соображения, а также начало повседневной работы по формированию позиции.',
  },
  {
    title: 'Пунктуальность',
    desc: 'Задача организации, в особенности же рамки и место обучения кадров влечет за собой.',
  },
  {
    title: 'Планирование',
    desc: 'Равным образом консультация с широким активом в значительной степени обуславливает.',
  },
  {
    title: 'Современные технологии',
    desc: 'Значимость этих проблем настолько очевидна, что реализация плановых заданий.',
  },
];

const Advantages = () => {
  return (
    <Section>
      <ul className={styles.advantages}>
        {initialState.map(adv => {
          const { title, desc } = adv;
          return (
            <li className={styles['advantages__item']} key={idGen()}>
              <h3 className={styles['advantages__title']}>{title}</h3>
              <p className={styles['advantages__desc']}>{desc}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Advantages;
