import shortid from 'shortid';

import routes from '../../routes';
import Section from '../Wrappers/Section';
import styles from './Clients.module.scss';

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
    <Section title="Постоянные клиенты">
      <ul className={styles.clients}>
        {clients.map(client => {
          const { link, width, height, image } = client;
          return (
            <li className={styles['clients__item']} key={idGen()}>
              <a
                href={link}
                className={styles['clients__link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={styles['clients__icon']}
                  width={width}
                  height={height}
                >
                  <use href={image}></use>
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Clients;
