import shortid from 'shortid';

import Socials from '../Socials';

const idGen = () => shortid.generate();

const team = [
  {
    name: 'Игорь Демьяненко',
    prof: 'Product Designer',
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/igor-demyanenko.jpg`,
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/igor-demyanenko.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/igor-demyanenko_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/igor-demyanenko.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/igor-demyanenko_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/igor-demyanenko.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/igor-demyanenko_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/igor-demyanenko.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/igor-demyanenko_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/igor-demyanenko.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/igor-demyanenko_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/igor-demyanenko.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/igor-demyanenko_2x.jpg 2x`,
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
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/olga-repina.jpg`,
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/olga-repina.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/olga-repina_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/olga-repina.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/olga-repina_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/olga-repina.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/olga-repina_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/olga-repina.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/olga-repina_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/olga-repina.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/olga-repina_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/olga-repina.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/olga-repina_2x.jpg 2x`,
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
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/nicolai-tarasov.jpg.jpg`,
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/nicolai-tarasov.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/nicolai-tarasov_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/nicolai-tarasov.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/nicolai-tarasov_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/nicolai-tarasov.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/nicolai-tarasov_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/nicolai-tarasov.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/nicolai-tarasov.jpg_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/nicolai-tarasov.jpg.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/nicolai-tarasov.jpg_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/nicolai-tarasov.jpg.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/nicolai-tarasov.jpg_2x.jpg 2x`,
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
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/michail-ermakov.jpg`,
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/michail-ermakov.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/michail-ermakov_2x.webp 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/michail-ermakov.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/michail-ermakov_2x.webp 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/michail-ermakov.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/michail-ermakov_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/michail-ermakov.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/michail-ermakov_2x.jpg 2x`,
        tablet: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/michail-ermakov.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/michail-ermakov_2x.jpg 2x`,
        mobile: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/michail-ermakov.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/michail-ermakov_2x.jpg 2x`,
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
