import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

import routes from '../../routes';
import Container from '../Wrappers/Container';
import styles from './PortfolioList.module.scss';

const idGen = () => shortid.generate();

const portfolioWorks = [
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/tekhnokryak_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/tekhnokryak_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/tekhnokryak_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/tekhnokryak_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/tekhnokryak_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak.jpg`,
    name: 'Технокряк',
    desc: 'Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.',
    link: `${routes.portfolio}`,
    id: 1,
    type: 'Веб-сайт',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/poster-new-orlean-vs-golden-star_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/poster-new-orlean-vs-golden-star_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/poster-new-orlean-vs-golden-star_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/poster-new-orlean-vs-golden-star_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/poster-new-orlean-vs-golden-star_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star.jpg`,
    name: 'New Orlean vs Golden Star',
    desc: 'New Orlean vs Golden Star',
    link: `${routes.portfolio}`,
    id: 2,
    type: 'Дизайн',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/restoran-seafood_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/restoran-seafood_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/restoran-seafood_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/restoran-seafood_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/restoran-seafood_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood.jpg`,
    name: 'Ресторан Seafood',
    desc: 'Ресторан Seafood',
    link: `${routes.portfolio}`,
    id: 3,
    type: 'Приложение',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-prime_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-prime_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-prime_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-prime_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-prime_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime.jpg`,
    name: 'Проект Prime',
    desc: 'Проект Prime',
    link: `${routes.portfolio}`,
    id: 4,
    type: 'Маркетинг',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-boxes_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-boxes_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-boxes_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-boxes_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-boxes_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes.jpg`,
    name: 'Проект Boxes',
    desc: 'Проект Boxes',
    link: `${routes.portfolio}`,
    id: 5,
    type: 'Приложение',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/inspiration-has-no-borders_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/inspiration-has-no-borders_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/inspiration-has-no-borders_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/inspiration-has-no-borders_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/inspiration-has-no-borders_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders.jpg`,
    name: 'Inspiration has no Borders',
    desc: 'Inspiration has no Borders',
    link: `${routes.portfolio}`,
    id: 6,
    type: 'Веб-сайт',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/izdanie-limited-edition_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/izdanie-limited-edition_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/izdanie-limited-edition_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/izdanie-limited-edition_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/izdanie-limited-edition_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition.jpg`,
    name: 'Издание Limited Edition',
    desc: 'Издание Limited Edition',
    link: `${routes.portfolio}`,
    id: 7,
    type: 'Дизайн',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-lab_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-lab_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-lab_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-lab_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-lab_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab.jpg`,
    name: 'Проект LAB',
    desc: 'Проект LAB',
    link: `${routes.portfolio}`,
    id: 8,
    type: 'Маркетинг',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/growing-business_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/growing-business_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/growing-business_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/growing-business_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/growing-business_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business.jpg`,
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
    <ul className={styles['portfolio-wrapper']}>
      <li className={styles['portfolio-wrapper-item']} key={idGen()}>
        <Container>
          <ul id="filter" className={styles['portfolio-sorting-list']}>
            {portfolioTypes.map(btn => (
              <li className={styles['portfolio-sorting-item']} key={idGen()}>
                <button
                  className={`${styles.button} ${styles['portfolio-sorting-btn']}`}
                  type="button"
                  onClick={handleFilter}
                >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </li>
      <li className={styles['portfolio-wrapper-item']} key={idGen()}>
        <Container>
          <ul id="portfolio" className={styles['portfolio-work-list']}>
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
                  <li className={styles['portfolio-work-item']} key={idGen()}>
                    <NavLink
                      to={`${link}/${id}`}
                      className={styles['portfolio-work-link']}
                    >
                      <div className={styles['portfolio-work-container']}>
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
                            className={styles.image}
                            src={image}
                            alt={name}
                            width="450"
                          />
                        </picture>
                        <p className={styles['portfolio-work-description']}>
                          {desc}
                        </p>
                      </div>
                      <h2 className={styles['portfolio-work-title']}>{name}</h2>
                      <p className={styles['portfolio-work-type']}>{type}</p>
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </Container>
      </li>
    </ul>
  );
};

export default PortfolioList;
