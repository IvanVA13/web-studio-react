import shortid from 'shortid';
import routes from '../../routes';
import styleModify from '../../styleModify';

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
    <ul className={`contacts ${type && styleModify.contacts[type].main}`}>
      {contactsArr.map(contact => {
        const { link, image, text, width, height } = contact;
        return (
          <li
            className={`contacts__item 
            ${type ? styleModify.contacts[type].item : 'contacts__item--margin'}
            `}
            key={idGen()}
          >
            <a
              className={`contacts__link  ${
                type && styleModify.contacts[type].link
              }`}
              href={link}
              rel="noopener noreferrer"
            >
              <svg
                className={`contacts__icon ${
                  type && styleModify.contacts[type].icon
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
