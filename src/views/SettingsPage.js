import { SettingsList } from '../components/SettingsList/SettingsList';
import User from '../components/User';
import Container from '../components/Wrappers/Container';

const SettingsPage = () => (
  <Container type="settings">
    <User sexRend />
    <SettingsList />
  </Container>
);

export default SettingsPage;
