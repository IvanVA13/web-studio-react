import shortid from 'shortid';

const idGen = () => shortid.generate();
const examples = [
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/img1.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/img1_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img1.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img1_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img1.jpg`,
    name: 'Десктопные приложения',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/img2.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/img2_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img2.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img2_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img2.jpg`,
    name: 'Мобильные приложения',
  },
  {
    'pic-source': [
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/img3.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/img3_2x.webp 2x`,
      },
      {
        desktop: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img3.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img3_2x.jpg 2x`,
      },
    ],
    image: `https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/img3.jpg`,
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
