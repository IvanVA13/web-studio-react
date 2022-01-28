import shortid from 'shortid';

import routes from '../../routes';
import styles from './Contacts.module.scss';

const idGen = () => shortid.generate();
const contactsArr = [
  {
    link: 'mailto:info@devstudio.com',
    image: `${routes.basename}/images/icon/sprite.svg#icon-envelope`,
    text: 'info@devstudio.com',
    width: '16',
    height: '12',
  },
  {
    link: 'tel:+380961111111',
    image: `${routes.basename}/images/icon/sprite.svg#icon-smartphone`,
    text: '+38 096 111 11 11',
    width: '10',
    height: '16',
  },
];

const Contacts = ({ type }) => {
  return (
    <ul className={`${styles.contacts} ${type && styles['contacts__address']}`}>
      {contactsArr.map(contact => {
        const { link, image, text, width, height } = contact;
        return (
          <li
            className={`
            ${
              type
                ? styles['contacts__item--footer']
                : styles['contacts__item--margin']
            }
            `}
            key={idGen()}
          >
            <a
              className={`${styles['contacts__link']} ${
                type === 'footer' && styles['contacts__link--footer']
              }
              `}
              href={link}
              rel="noopener noreferrer"
            >
              <svg
                className={`${styles['contacts__icon']}  ${
                  type === 'footer' && styles['contacts__icon--hide']
                }`}
                width={width}
                height={height}
              >
                <use href={image}></use>
              </svg>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
