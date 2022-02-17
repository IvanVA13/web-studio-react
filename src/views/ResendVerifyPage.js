import EmailForm from '../components/EmailForm';
import { resendVerifyToken } from '../redux/auth/auth-operations';

const ResendVerifyPage = () => {
  return (
    <EmailForm
      title="Выслать повторно письмо для верификации"
      operationFunc={resendVerifyToken}
    />
  );
};

export default ResendVerifyPage;
