import { useRouteMatch } from 'react-router-dom';
import Section from '../components/Wrappers/Section';
const PortfolioPage = () => {
  const path = useRouteMatch();

  return (
    <main>
      <Section container="hide" title={`Портфолио № ${path?.params?.id}`} />
    </main>
  );
};
export default PortfolioPage;
