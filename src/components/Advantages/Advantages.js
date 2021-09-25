import shortid from 'shortid';

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
    <section className="section">
      <div className="container">
        <h2 className="section__title section__title--hidden">
          Особенности компании
        </h2>
        <ul className="advantages">
          {initialState.map(adv => {
            const { title, desc } = adv;
            return (
              <li className="advantages__item" key={idGen()}>
                <h3 className="title advantages__title">{title}</h3>
                <p className="advantages__desc">{desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
