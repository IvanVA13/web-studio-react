import shortid from 'shortid';

import routes from '../../routes';

const idGen = () => shortid.generate();

const clients = [
  {
    link: 'https://github.com',
    width: '44',
    height: '49',
    image: `${routes.basename}/images/icon/sprite.svg#icon-client-logo-1`,
  },
  {
    link: 'https://figma.com',
    width: '40',
    height: '52',
    image: `${routes.basename}/images/icon/sprite.svg#icon-client-logo-2`,
  },
  {
    link: 'https://npmjs.com',
    width: '41',
    height: '42.6',
    image: `${routes.basename}/images/icon/sprite.svg#icon-client-logo-3`,
  },
  {
    link: 'https://handlebarsjs.com',
    width: '79.66',
    height: '42',
    image: `${routes.basename}/images/icon/sprite.svg#icon-client-logo-4`,
  },
  {
    link: 'https://webpack.js.org',
    width: '59',
    height: '47',
    image: `${routes.basename}/images/icon/sprite.svg#icon-client-logo-5`,
  },
  {
    link: 'https://parceljs.org/',
    width: '88.48',
    height: '45.44',
    image: `${routes.basename}/images/icon/sprite.svg#icon-client-logo-6`,
  },
];

const Clients = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Постоянные клиенты</h2>
        <ul className="clients">
          {clients.map(client => {
            const { link, width, height, image } = client;
            return (
              <li className="clients__item" key={idGen()}>
                <a
                  href={link}
                  className="clients__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="clients__icon" width={width} height={height}>
                    <use href={image}></use>
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
