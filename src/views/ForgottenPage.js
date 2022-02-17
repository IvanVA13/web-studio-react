import EmailForm from '../components/EmailForm';
import { forgotten } from '../redux/auth';

const ForgottenPage = () => {
  return (
    <EmailForm
      title="Укажите email для сброса пароля"
      operationFunc={forgotten}
    />
  );
};

export default ForgottenPage;
