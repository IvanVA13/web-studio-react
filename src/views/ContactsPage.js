import Contacts from '../components/Contacts';
import Socials from '../components/Socials';
import Container from '../components/Wrappers/Container';

const socMain = [
  'https://instagram.com',
  'https://twitter.com',
  'https://facebook.com',
  'https://linkedin.com',
];

const ContactsPage = () => (
  <main>
    <Container>
      <ul style={{ listStyle: 'none' }}>
        <li className="contacts__item--footer">
          <h2 className="advantages__title">Контакты</h2>
          <Contacts type="contactsPage" />
        </li>
        <li className="contacts__item--footer">
          <h2 className="advantages__title">Социальные сети</h2>
          <Socials socLink={socMain} />
        </li>
      </ul>
    </Container>
  </main>
);

export default ContactsPage;
