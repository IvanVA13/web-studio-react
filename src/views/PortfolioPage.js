import { useRouteMatch } from 'react-router-dom';

const PortfolioPage = () => {
  const path = useRouteMatch().params.id;

  return (
    <main>
      <section className="section">
        <h1 className="section__title">Портфолио № {path}</h1>
      </section>
    </main>
  );
};
export default PortfolioPage;
