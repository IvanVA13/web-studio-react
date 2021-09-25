import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

import routes from '../../routes';

const idGen = () => shortid.generate();

const portfolioWorks = [
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/tekhnokryak.webp 1x, ./images/portfolio/desktop/tekhnokryak@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/tekhnokryak.webp 1x, ./images/portfolio/tablet/tekhnokryak@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/tekhnokryak.webp 1x, ./images/portfolio/mobile/tekhnokryak@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/tekhnokryak.jpg 1x, ./images/portfolio/desktop/tekhnokryak@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/tekhnokryak.jpg 1x, ./images/portfolio/tablet/tekhnokryak@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/tekhnokryak.jpg 1x, ./images/portfolio/mobile/tekhnokryak@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/tekhnokryak.jpg`,
    name: 'Технокряк',
    desc: 'Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.',
    link: `${routes.portfolio}`,
    id: 1,
    type: 'Веб-сайт',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/poster-new-orlean-vs-golden-star.webp 1x, ./images/portfolio/desktop/poster-new-orlean-vs-golden-star@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/poster-new-orlean-vs-golden-star.webp 1x, ./images/portfolio/tablet/poster-new-orlean-vs-golden-star@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/poster-new-orlean-vs-golden-star.webp 1x, ./images/portfolio/mobile/poster-new-orlean-vs-golden-star@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/poster-new-orlean-vs-golden-star.jpg 1x, ./images/portfolio/desktop/poster-new-orlean-vs-golden-star@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/poster-new-orlean-vs-golden-star.jpg 1x, ./images/portfolio/tablet/poster-new-orlean-vs-golden-star@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/poster-new-orlean-vs-golden-star.jpg 1x, ./images/portfolio/mobile/poster-new-orlean-vs-golden-star@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/poster-new-orlean-vs-golden-star.jpg`,
    name: 'New Orlean vs Golden Star',
    desc: 'New Orlean vs Golden Star',
    link: `${routes.portfolio}`,
    id: 2,
    type: 'Дизайн',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/restoran-seafood.webp 1x, ./images/portfolio/desktop/restoran-seafood@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/restoran-seafood.webp 1x, ./images/portfolio/tablet/restoran-seafood@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/restoran-seafood.webp 1x, ./images/portfolio/mobile/restoran-seafood@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/restoran-seafood.jpg 1x, ./images/portfolio/desktop/restoran-seafood@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/restoran-seafood.jpg 1x, ./images/portfolio/tablet/restoran-seafood@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/restoran-seafood.jpg 1x, ./images/portfolio/mobile/restoran-seafood@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/restoran-seafood.jpg`,
    name: 'Ресторан Seafood',
    desc: 'Ресторан Seafood',
    link: `${routes.portfolio}`,
    id: 3,
    type: 'Приложение',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/project-prime.webp 1x, ./images/portfolio/desktop/project-prime@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/project-prime.webp 1x, ./images/portfolio/tablet/project-prime@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/project-prime.webp 1x, ./images/portfolio/mobile/project-prime@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/project-prime.jpg 1x, ./images/portfolio/desktop/project-prime@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/project-prime.jpg 1x, ./images/portfolio/tablet/project-prime@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/project-prime.jpg 1x, ./images/portfolio/mobile/project-prime@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/project-prime.jpg`,
    name: 'Проект Prime',
    desc: 'Проект Prime',
    link: `${routes.portfolio}`,
    id: 4,
    type: 'Маркетинг',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/project-boxes.webp 1x, ./images/portfolio/desktop/project-boxes@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/project-boxes.webp 1x, ./images/portfolio/tablet/project-boxes@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/project-boxes.webp 1x, ./images/portfolio/mobile/project-boxes@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/project-boxes.jpg 1x, ./images/portfolio/desktop/project-boxes@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/project-boxes.jpg 1x, ./images/portfolio/tablet/project-boxes@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/project-boxes.jpg 1x, ./images/portfolio/mobile/project-boxes@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/project-boxes.jpg`,
    name: 'Проект Boxes',
    desc: 'Проект Boxes',
    link: `${routes.portfolio}`,
    id: 5,
    type: 'Приложение',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/inspiration-has-no-borders.webp 1x, ./images/portfolio/desktop/inspiration-has-no-borders@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/inspiration-has-no-borders.webp 1x, ./images/portfolio/tablet/inspiration-has-no-borders@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/inspiration-has-no-borders.webp 1x, ./images/portfolio/mobile/inspiration-has-no-borders@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/inspiration-has-no-borders.jpg 1x, ./images/portfolio/desktop/inspiration-has-no-borders@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/inspiration-has-no-borders.jpg 1x, ./images/portfolio/tablet/inspiration-has-no-borders@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/inspiration-has-no-borders.jpg 1x, ./images/portfolio/mobile/inspiration-has-no-borders@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/inspiration-has-no-borders.jpg`,
    name: 'Inspiration has no Borders',
    desc: 'Inspiration has no Borders',
    link: `${routes.portfolio}`,
    id: 6,
    type: 'Веб-сайт',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/izdanie-limited-edition.webp 1x, ./images/portfolio/desktop/izdanie-limited-edition@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/izdanie-limited-edition.webp 1x, ./images/portfolio/tablet/izdanie-limited-edition@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/izdanie-limited-edition.webp 1x, ./images/portfolio/mobile/izdanie-limited-edition@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/izdanie-limited-edition.jpg 1x, ./images/portfolio/desktop/izdanie-limited-edition@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/izdanie-limited-edition.jpg 1x, ./images/portfolio/tablet/izdanie-limited-edition@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/izdanie-limited-edition.jpg 1x, ./images/portfolio/mobile/izdanie-limited-edition@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/izdanie-limited-edition.jpg`,
    name: 'Издание Limited Edition',
    desc: 'Издание Limited Edition',
    link: `${routes.portfolio}`,
    id: 7,
    type: 'Дизайн',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/project-lab.webp 1x, ./images/portfolio/desktop/project-lab@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/project-lab.webp 1x, ./images/portfolio/tablet/project-lab@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/project-lab.webp 1x, ./images/portfolio/mobile/project-lab@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/project-lab.jpg 1x, ./images/portfolio/desktop/project-lab@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/project-lab.jpg 1x, ./images/portfolio/tablet/project-lab@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/project-lab.jpg 1x, ./images/portfolio/mobile/project-lab@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/project-lab.jpg`,
    name: 'Проект LAB',
    desc: 'Проект LAB',
    link: `${routes.portfolio}`,
    id: 8,
    type: 'Маркетинг',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/portfolio/desktop/growing-business.webp 1x, ./images/portfolio/desktop/growing-business@2x.webp 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/growing-business.webp 1x, ./images/portfolio/tablet/growing-business@2x.webp 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/growing-business.webp 1x, ./images/portfolio/mobile/growing-business@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/portfolio/desktop/growing-business.jpg 1x, ./images/portfolio/desktop/growing-business@2x.jpg 2x`,
        tablet: `${routes.basename}/images/portfolio/tablet/growing-business.jpg 1x, ./images/portfolio/tablet/growing-business@2x.jpg 2x`,
        mobile: `${routes.basename}/images/portfolio/mobile/growing-business.jpg 1x, ./images/portfolio/mobile/growing-business@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/portfolio/desktop/growing-business.jpg`,
    name: 'Growing Business',
    desc: 'Growing Business',
    link: `${routes.portfolio}`,
    id: 9,
    type: 'Приложение',
  },
];

const portfolioTypes = [
  'Все',
  'Веб-сайты',
  'Приложения',
  'Дизайн',
  'Маркетинг',
];

const PortfolioList = () => {
  const [filter, setFilter] = useState('Все');
  const handleFilter = e => {
    const { textContent } = e.target;
    setFilter(textContent);
  };
  return (
    <ul className="section__list">
      <li className="section__item" key={idGen()}>
        <div className="container">
          <ul id="filter" className="sorting">
            {portfolioTypes.map(btn => (
              <li className="sorting__item" key={idGen()}>
                <button
                  className="button sorting__button"
                  type="button"
                  onClick={handleFilter}
                >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className="section__item" key={idGen()}>
        <div className="container">
          <ul id="portfolio" className="portfolio">
            {portfolioWorks
              .filter(el => {
                if (filter === 'Все') {
                  return el;
                } else {
                  return el.type.includes(filter.slice(1, -1));
                }
              })
              .map(el => {
                const { image, name, desc, link, id, type } = el;
                const [webp, jpg] = el['pic-source'];
                return (
                  <li className="portfolio__item" key={idGen()}>
                    <NavLink to={`${link}/${id}`} className="portfolio__link">
                      <div className="portfolio__container">
                        <picture>
                          <source
                            srcSet={webp.desktop}
                            media="(min-width: 1200px)"
                          />
                          <source
                            srcSet={webp.tablet}
                            media="(min-width: 768px)"
                          />
                          <source
                            srcSet={webp.mobile}
                            media="(max-width: 767px)"
                          />
                          <source
                            srcSet={jpg.desktop}
                            media="(min-width: 1200px)"
                          />
                          <source
                            srcSet={jpg.tablet}
                            media="(min-width: 768px)"
                          />
                          <source
                            srcSet={jpg.mobile}
                            media="(max-width: 767px)"
                          />
                          <img
                            className="image"
                            src={image}
                            alt={name}
                            width="450"
                          />
                        </picture>
                        <p className="portfolio__description">{desc}</p>
                      </div>
                      <h2 className="title portfolio__title">{name}</h2>
                      <p className="portfolio__type-work">{type}</p>
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default PortfolioList;
