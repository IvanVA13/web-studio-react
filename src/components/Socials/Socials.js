import shortid from 'shortid';

import routes from '../../routes';
import styles from './Socials.module.scss';

const idGen = () => shortid.generate();

const socIcons = [
  `${routes.basename}/images/icon/sprite.svg#icon-instagram`,
  `${routes.basename}/images/icon/sprite.svg#icon-twitter`,
  `${routes.basename}/images/icon/sprite.svg#icon-facebook`,
  `${routes.basename}/images/icon/sprite.svg#icon-linkedin`,
];

const Socials = ({ socLink, type }) => {
  return (
    <ul className={styles.socials}>
      {socIcons.map((icon, i) => (
        <li className={styles['socials__item']} key={idGen()}>
          <a
            className={`${styles['socials__link']} ${
              type === 'footer' ? styles['socials__link--bg-color'] : ''
            }`}
            href={socLink[i]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={`${styles['socials__icon']} ${
                type === 'footer' ? styles['socials__icon--fill'] : ''
              }`}
            >
              <use href={icon}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
