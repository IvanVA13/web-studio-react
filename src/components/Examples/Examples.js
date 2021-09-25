import shortid from 'shortid';

import routes from '../../routes';

const idGen = () => shortid.generate();
const examples = [
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/examples/desktop/img1.webp 1x, web-studio-react/images/examples/desktop/img1@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/examples/desktop/img1.jpg 1x, web-studio-react/images/examples/desktop/img1@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/examples/desktop/img1.jpg`,
    name: 'Десктопные приложения',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/examples/desktop/img2.webp 1x, web-studio-react/images/examples/desktop/img2@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/examples/desktop/img2.jpg 1x, web-studio-react/images/examples/desktop/img2@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/examples/desktop/img2.jpg`,
    name: 'Мобильные приложения',
  },
  {
    'pic-source': [
      {
        desktop: `${routes.basename}/images/examples/desktop/img3.webp 1x, web-studio-react/images/examples/desktop/img3@2x.webp 2x`,
      },
      {
        desktop: `${routes.basename}/images/examples/desktop/img3.jpg 1x, web-studio-react/images/examples/desktop/img3@2x.jpg 2x`,
      },
    ],
    image: `${routes.basename}/images/examples/desktop/img3.jpg`,
    name: 'Дизайнерские решения',
  },
];

const Examples = () => {
  return (
    <section className="section section--pad-top section--hidden">
      <div className="container">
        <h2 className="section__title">Чем мы занимаемся</h2>
        <ul className="work-examples">
          {examples.map(example => {
            const { image, name } = example;
            return (
              <li className="work-examples__item" key={idGen()}>
                <div className="work-examples__container">
                  <picture>
                    {example['pic-source'].map(pic => {
                      return (
                        <source
                          srcSet={pic.desktop}
                          media="(min-width: 1200px)"
                          key={idGen()}
                        />
                      );
                    })}
                    <img className="image" src={image} alt={name} width="370" />
                  </picture>
                  <h3 className="title work-examples__title">{name}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Examples;
