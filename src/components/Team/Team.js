import shortid from 'shortid';

import routes from '../../routes';
import Socials from '../Socials';

const idGen = () => shortid.generate();

const team = [
  {
    name: 'Игорь Демьяненко',
    prof: 'Product Designer',
    image: `${routes.basename}/images/team/desktop/igor-demyanenko.jpg`,
    'pic-source': [
      {
        desktop: `${routes.basename}/images/team/desktop/igor-demyanenko.webp 1x, ./images/team/desktop/igor-demyanenko@2x.webp 2x`,
        tablet: `${routes.basename}/images/team/tablet/igor-demyanenko.webp 1x, ./images/team/tablet/igor-demyanenko@2x.webp 2x`,
        mobile: `${routes.basename}/images/team/mobile/igor-demyanenko.webp 1x, ./images/team/mobile/igor-demyanenko@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/team/desktop/igor-demyanenko.jpg 1x, ./images/team/desktop/igor-demyanenko@2x.jpg 2x`,
        tablet: `${routes.basename}/images/team/tablet/igor-demyanenko.jpg 1x, ./images/team/tablet/igor-demyanenko@2x.jpg 2x`,
        mobile: `${routes.basename}/images/team/mobile/igor-demyanenko.jpg 1x, ./images/team/mobile/igor-demyanenko@2x.jpg 2x`,
      },
    ],
    'soc-link': [
      'https://instagram.com',
      'https://twitter.com',
      'https://facebook.com',
      'https://linkedin.com',
    ],
  },
  {
    name: 'Ольга Репина',
    prof: 'Frontend Developer',
    image: `${routes.basename}/images/team/desktop/olga-repina.jpg`,
    'pic-source': [
      {
        desktop: `${routes.basename}/images/team/desktop/olga-repina.webp 1x, ./images/team/desktop/olga-repina@2x.webp 2x`,
        tablet: `${routes.basename}/images/team/tablet/olga-repina.webp 1x, ./images/team/tablet/olga-repina@2x.webp 2x`,
        mobile: `${routes.basename}/images/team/mobile/olga-repina.webp 1x, ./images/team/mobile/olga-repina@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/team/desktop/olga-repina.jpg 1x, ./images/team/desktop/olga-repina@2x.jpg 2x`,
        tablet: `${routes.basename}/images/team/tablet/olga-repina.jpg 1x, ./images/team/tablet/olga-repina@2x.jpg 2x`,
        mobile: `${routes.basename}/images/team/mobile/olga-repina.jpg 1x, ./images/team/mobile/olga-repina@2x.jpg 2x`,
      },
    ],
    'soc-link': [
      'https://instagram.com',
      'https://twitter.com',
      'https://facebook.com',
      'https://linkedin.com',
    ],
  },
  {
    name: 'Николай Тарасов',
    prof: 'Marketing',
    image: `${routes.basename}/images/team/desktop/nicolai-tarasov.jpg.jpg`,
    'pic-source': [
      {
        desktop: `${routes.basename}/images/team/desktop/nicolai-tarasov.webp 1x, ./images/team/desktop/nicolai-tarasov@2x.webp 2x`,
        tablet: `${routes.basename}/images/team/tablet/nicolai-tarasov.webp 1x, ./images/team/tablet/nicolai-tarasov@2x.webp 2x`,
        mobile: `${routes.basename}/images/team/mobile/nicolai-tarasov.webp 1x, ./images/team/mobile/nicolai-tarasov@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/team/desktop/nicolai-tarasov.jpg 1x, ./images/team/desktop/nicolai-tarasov.jpg@2x.jpg 2x`,
        tablet: `${routes.basename}/images/team/tablet/nicolai-tarasov.jpg.jpg 1x, ./images/team/tablet/nicolai-tarasov.jpg@2x.jpg 2x`,
        mobile: `${routes.basename}/images/team/mobile/nicolai-tarasov.jpg.jpg 1x, ./images/team/mobile/nicolai-tarasov.jpg@2x.jpg 2x`,
      },
    ],
    'soc-link': [
      'https://instagram.com',
      'https://twitter.com',
      'https://facebook.com',
      'https://linkedin.com',
    ],
  },
  {
    name: 'Михаил Ермаков',
    prof: 'UI Designer',
    image: `${routes.basename}/images/team/desktop/michail-ermakov.jpg`,
    'pic-source': [
      {
        desktop: `${routes.basename}/images/team/desktop/michail-ermakov.webp 1x, ./images/team/desktop/michail-ermakov@2x.webp 2x`,
        tablet: `${routes.basename}/images/team/tablet/michail-ermakov.webp 1x, ./images/team/tablet/michail-ermakov@2x.webp 2x`,
        mobile: `${routes.basename}/images/team/mobile/michail-ermakov.webp 1x, ./images/team/mobile/michail-ermakov@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/team/desktop/michail-ermakov.jpg 1x, ./images/team/desktop/michail-ermakov@2x.jpg 2x`,
        tablet: `${routes.basename}/images/team/tablet/michail-ermakov.jpg 1x, ./images/team/tablet/michail-ermakov@2x.jpg 2x`,
        mobile: `${routes.basename}/images/team/mobile/michail-ermakov.jpg 1x, ./images/team/mobile/michail-ermakov@2x.jpg 2x`,
      },
    ],
    'soc-link': [
      'https://instagram.com',
      'https://twitter.com',
      'https://facebook.com',
      'https://linkedin.com',
    ],
  },
];

const Team = () => {
  return (
    <section className="section section--bg-color">
      <div className="container">
        <h2 className="section__title">Наша команда</h2>
        <ul className="team">
          {team.map(teammate => {
            const { name, prof, image } = teammate;
            const [webp, jpg] = teammate['pic-source'];
            return (
              <li className="team__item" key={idGen()}>
                <div className="card">
                  <picture>
                    <source srcSet={webp.desktop} media="(min-width: 1200px)" />
                    <source srcSet={webp.tablet} media="(min-width: 768px)" />
                    <source srcSet={webp.mobile} media="(max-width: 767px)" />
                    <source srcSet={jpg.desktop} media="(min-width: 1200px)" />
                    <source srcSet={jpg.tablet} media="(min-width: 768px)" />
                    <source srcSet={jpg.mobile} media="(max-width: 767px)" />
                    <img
                      className="image image--margin"
                      src={image}
                      alt={name}
                      width="450"
                    />
                  </picture>
                  <h3 className="title card__title">{name}</h3>
                  <p className="card__profession">{prof}</p>
                  <Socials socLink={teammate['soc-link']} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Team;
