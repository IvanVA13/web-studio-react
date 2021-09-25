import shortid from 'shortid';

import routes from '../../routes';
import styleModify from '../../styleModify';

const idGen = () => shortid.generate();

const socIcons = [
  `${routes.basename}/images/icon/sprite.svg#icon-instagram`,
  `${routes.basename}/images/icon/sprite.svg#icon-twitter`,
  `${routes.basename}/images/icon/sprite.svg#icon-facebook`,
  `${routes.basename}/images/icon/sprite.svg#icon-linkedin`,
];

const Socials = ({ socLink, type }) => {
  return (
    <ul className="socials">
      {socIcons.map((icon, i) => (
        <li className="socials__item" key={idGen()}>
          <a
            className={`socials__link ${
              type && styleModify.socials[type].link
            }`}
            href={socLink[i]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={`socials__icon ${
                type && styleModify.socials[type].icon
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
