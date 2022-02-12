import Contacts from '../components/Contacts';
import Socials from '../components/Socials';
import Container from '../components/Wrappers/Container';
import styles from '../components/Contacts/Contacts.module.scss';
const socMain = [
  'https://instagram.com',
  'https://twitter.com',
  'https://facebook.com',
  'https://linkedin.com',
];

const contactsList = [
  {
    name: 'Contacts',
    title: 'Контакты',
    Component: Contacts,
  },
  {
    name: 'Socials',
    title: 'Социальные сети',
    Component: Socials,
  },
];

const ContactsPage = () => (
  <main>
    <Container>
      <ul className={styles['contacts-list']}>
        {contactsList.map(({ name, title, Component }) => (
          <li key={name} className={styles['contacts__item--footer']}>
            <h2 className={styles['contacts__title']}>{title}</h2>
            {name === 'Contacts' ? (
              <Component type="contactsPage" />
            ) : (
              <Component socLink={socMain} />
            )}
          </li>
        ))}
      </ul>
    </Container>
  </main>
);

export default ContactsPage;
