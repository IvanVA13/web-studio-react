(this["webpackJsonpweb-studio-react"]=this["webpackJsonpweb-studio-react"]||[]).push([[7],{145:function(e,t,o){"use strict";o(1);var a=o(153),i=o.n(a),p=o(36),r=o(2),d=function(e){var t=e.type,o=e.container,a=e.title,d=e.children,l=function(){return Object(r.jsxs)(p.a,{type:o,children:[a&&"main"===t&&Object(r.jsx)("h1",{className:i.a.hero__title,children:a}),a&&"main"!==t&&Object(r.jsx)("h2",{className:i.a.section__title,children:a}),d]})};return"main"===t?Object(r.jsx)("section",{className:i.a.hero,children:l()}):"desktop"===t?Object(r.jsx)("section",{className:"".concat(i.a.section," ").concat(i.a["section--pad-top"]," ").concat(i.a["section--hidden"]),children:l()}):"second"===t?Object(r.jsx)("section",{className:"".concat(i.a.section," ").concat(i.a["section--bg-color"]),children:l()}):t?void 0:Object(r.jsx)("section",{className:i.a.section,children:l()})};d.defaultProps={type:"",title:"",container:""},t.a=d},148:function(e,t,o){"use strict";var a=o(145);o.d(t,"a",(function(){return a.a}))},153:function(e,t,o){e.exports={section:"Section_section__2wWoo","section--pad-top":"Section_section--pad-top__2zE07","section--hidden":"Section_section--hidden__yoCCN","section--bg-color":"Section_section--bg-color__30pWN",section__title:"Section_section__title__1tXxJ","section__title--hidden":"Section_section__title--hidden__cf7tj",hero:"Section_hero__Vdh3L",hero__title:"Section_hero__title__3rvi0"}},157:function(e,t,o){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o.d(t,"a",(function(){return a}))},208:function(e,t,o){e.exports={"portfolio-work-link":"PortfolioList_portfolio-work-link__2WKiN",image:"PortfolioList_image__29Myh","portfolio-work-description":"PortfolioList_portfolio-work-description__32rdP",button:"PortfolioList_button__UHnUB","portfolio-wrapper":"PortfolioList_portfolio-wrapper__2DV3L","portfolio-sorting-list":"PortfolioList_portfolio-sorting-list__2l_DJ","portfolio-work-list":"PortfolioList_portfolio-work-list__neX34","portfolio-work-title":"PortfolioList_portfolio-work-title__Qpwx0","image--margin":"PortfolioList_image--margin__1359U",button__icon:"PortfolioList_button__icon__1qcOQ","portfolio-wrapper-item":"PortfolioList_portfolio-wrapper-item__3QOAZ","portfolio-sorting-item":"PortfolioList_portfolio-sorting-item__uRumO","portfolio-sorting-btn":"PortfolioList_portfolio-sorting-btn__3SSAc","portfolio-work-item":"PortfolioList_portfolio-work-item__3JqsW","portfolio-work-container":"PortfolioList_portfolio-work-container__2ehWE","portfolio-work-type":"PortfolioList_portfolio-work-type__3_Cbv"}},325:function(e,t,o){"use strict";o.r(t);var a=o(29),i=o(1),p=o.n(i),r=o(22),d=o(15),l=o(8),s=o(157),n=o(19),c=(o(10),o(45));function m(e,t){var o=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){o[e.key]=function(e){return t&&Object(i.isValidElement)(e)?t(e):e}(e)})),o}function u(e,t,o){return null!=o[t]?o[t]:e.props[t]}function j(e,t,o){var a=m(e.children),p=function(e,t){function o(o){return o in t?t[o]:e[o]}e=e||{},t=t||{};var a,i=Object.create(null),p=[];for(var r in e)r in t?p.length&&(i[r]=p,p=[]):p.push(r);var d={};for(var l in t){if(i[l])for(a=0;a<i[l].length;a++){var s=i[l][a];d[i[l][a]]=o(s)}d[l]=o(l)}for(a=0;a<p.length;a++)d[p[a]]=o(p[a]);return d}(t,a);return Object.keys(p).forEach((function(r){var d=p[r];if(Object(i.isValidElement)(d)){var l=r in t,s=r in a,n=t[r],c=Object(i.isValidElement)(n)&&!n.props.in;!s||l&&!c?s||!l||c?s&&l&&Object(i.isValidElement)(n)&&(p[r]=Object(i.cloneElement)(d,{onExited:o.bind(null,d),in:n.props.in,exit:u(d,"exit",e),enter:u(d,"enter",e)})):p[r]=Object(i.cloneElement)(d,{in:!1}):p[r]=Object(i.cloneElement)(d,{onExited:o.bind(null,d),in:!0,exit:u(d,"exit",e),enter:u(d,"enter",e)})}})),p}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},b=function(e){function t(t,o){var a,i=(a=e.call(this,t,o)||this).handleExited.bind(Object(s.a)(a));return a.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},a}Object(n.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var o,a,p=t.children,r=t.handleExited;return{children:t.firstRender?(o=e,a=r,m(o.children,(function(e){return Object(i.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:u(e,"appear",o),enter:u(e,"enter",o),exit:u(e,"exit",o)})}))):j(e,p,r),firstRender:!1}},o.handleExited=function(e,t){var o=m(this.props.children);e.key in o||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var o=Object(l.a)({},t.children);return delete o[e.key],{children:o}})))},o.render=function(){var e=this.props,t=e.component,o=e.childFactory,a=Object(d.a)(e,["component","childFactory"]),i=this.state.contextValue,r=g(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,null===t?p.a.createElement(c.a.Provider,{value:i},r):p.a.createElement(c.a.Provider,{value:i},p.a.createElement(t,a,r))},t}(p.a.Component);b.propTypes={},b.defaultProps={component:"div",childFactory:function(e){return e}};var v=b,x=o(143),h=o(52),w=o.n(h),y=o(5),_=o(36),k=o(208),f=o.n(k),z=o(2),C=function(){return w.a.generate()},A=[{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/tekhnokryak_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/tekhnokryak_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/tekhnokryak_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/tekhnokryak_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/tekhnokryak_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak.jpg",name:"\u0422\u0435\u0445\u043d\u043e\u043a\u0440\u044f\u043a",desc:"\u0422\u0435\u0445\u043d\u043e\u043a\u0440\u044f\u043a \u044d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0430. \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u044d\u0442\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0433\u043e \u0448\u043f\u0438\u043e\u043d\u0430\u0436\u0430 \u0438 \u0430\u0442\u0430\u043a \u043d\u0430 \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0432.",link:"".concat(y.a.portfolio),id:1,type:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/poster-new-orlean-vs-golden-star_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/poster-new-orlean-vs-golden-star_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/poster-new-orlean-vs-golden-star_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/poster-new-orlean-vs-golden-star_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/poster-new-orlean-vs-golden-star_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star.jpg",name:"New Orlean vs Golden Star",desc:"New Orlean vs Golden Star",link:"".concat(y.a.portfolio),id:2,type:"\u0414\u0438\u0437\u0430\u0439\u043d"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/restoran-seafood_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/restoran-seafood_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/restoran-seafood_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/restoran-seafood_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/restoran-seafood_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood.jpg",name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d Seafood",desc:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d Seafood",link:"".concat(y.a.portfolio),id:3,type:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-prime_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-prime_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-prime_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-prime_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-prime_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime.jpg",name:"\u041f\u0440\u043e\u0435\u043a\u0442 Prime",desc:"\u041f\u0440\u043e\u0435\u043a\u0442 Prime",link:"".concat(y.a.portfolio),id:4,type:"\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-boxes_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-boxes_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-boxes_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-boxes_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-boxes_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes.jpg",name:"\u041f\u0440\u043e\u0435\u043a\u0442 Boxes",desc:"\u041f\u0440\u043e\u0435\u043a\u0442 Boxes",link:"".concat(y.a.portfolio),id:5,type:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/inspiration-has-no-borders_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/inspiration-has-no-borders_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/inspiration-has-no-borders_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/inspiration-has-no-borders_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/inspiration-has-no-borders_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders.jpg",name:"Inspiration has no Borders",desc:"Inspiration has no Borders",link:"".concat(y.a.portfolio),id:6,type:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/izdanie-limited-edition_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/izdanie-limited-edition_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/izdanie-limited-edition_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/izdanie-limited-edition_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/izdanie-limited-edition_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition.jpg",name:"\u0418\u0437\u0434\u0430\u043d\u0438\u0435 Limited Edition",desc:"\u0418\u0437\u0434\u0430\u043d\u0438\u0435 Limited Edition",link:"".concat(y.a.portfolio),id:7,type:"\u0414\u0438\u0437\u0430\u0439\u043d"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-lab_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-lab_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-lab_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-lab_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-lab_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab.jpg",name:"\u041f\u0440\u043e\u0435\u043a\u0442 LAB",desc:"\u041f\u0440\u043e\u0435\u043a\u0442 LAB",link:"".concat(y.a.portfolio),id:8,type:"\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/growing-business_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/growing-business_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/growing-business_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/growing-business_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/growing-business_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business.jpg",name:"Growing Business",desc:"Growing Business",link:"".concat(y.a.portfolio),id:9,type:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}],O=["\u0412\u0441\u0435","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u044b","\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","\u0414\u0438\u0437\u0430\u0439\u043d","\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433"],E=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(A),o=Object(a.a)(t,2),p=o[0],d=o[1],l=Object(i.useState)("\u0412\u0441\u0435"),s=Object(a.a)(l,2),n=s[0],c=s[1],m=function(e){var t=e.target.textContent;c("\u0412\u0441\u0435"!==t?t.slice(0,-1):t)};return Object(i.useEffect)((function(){return d("\u0412\u0441\u0435"!==n?A.filter((function(e){return e.type.includes(n)})):A)}),[n]),Object(z.jsxs)("ul",{className:f.a["portfolio-wrapper"],children:[Object(z.jsx)("li",{className:f.a["portfolio-wrapper-item"],children:Object(z.jsx)(_.a,{children:Object(z.jsx)("ul",{className:f.a["portfolio-sorting-list"],children:O.map((function(e){return Object(z.jsx)("li",{className:f.a["portfolio-sorting-item"],children:Object(z.jsx)("button",{className:"".concat(f.a.button," ").concat(f.a["portfolio-sorting-btn"]),type:"button",onClick:m,children:e})},C())}))})})}),Object(z.jsx)("li",{className:f.a["portfolio-wrapper-item"],children:Object(z.jsx)(_.a,{children:Object(z.jsx)(v,{component:"ul",className:f.a["portfolio-work-list"],children:p.map((function(t){var o=t.image,i=t.name,p=t.desc,d=t.link,l=t.id,s=t.type,n=Object(a.a)(t["pic-source"],2),c=n[0],m=n[1];return Object(z.jsx)(x.a,{ref:e,timeout:500,classNames:"scale-anim",children:Object(z.jsx)("li",{ref:e,className:f.a["portfolio-work-item"],children:Object(z.jsxs)(r.b,{to:"".concat(d,"/").concat(l),className:f.a["portfolio-work-link"],children:[Object(z.jsxs)("div",{className:f.a["portfolio-work-container"],children:[Object(z.jsxs)("picture",{children:[Object(z.jsx)("source",{srcSet:c.desktop,media:"(min-width: 1200px)"}),Object(z.jsx)("source",{srcSet:c.tablet,media:"(min-width: 768px)"}),Object(z.jsx)("source",{srcSet:c.mobile,media:"(max-width: 767px)"}),Object(z.jsx)("source",{srcSet:m.desktop,media:"(min-width: 1200px)"}),Object(z.jsx)("source",{srcSet:m.tablet,media:"(min-width: 768px)"}),Object(z.jsx)("source",{srcSet:m.mobile,media:"(max-width: 767px)"}),Object(z.jsx)("img",{className:f.a.image,src:o,alt:i,width:"450"})]}),Object(z.jsx)("p",{className:f.a["portfolio-work-description"],children:p})]}),Object(z.jsx)("h2",{className:f.a["portfolio-work-title"],children:i}),Object(z.jsx)("p",{className:f.a["portfolio-work-type"],children:s})]})})},C())}))})})})]})},N=o(148);t.default=function(){return Object(z.jsx)("main",{children:Object(z.jsx)(N.a,{container:"hide",children:Object(z.jsx)(E,{})})})}}}]);
//# sourceMappingURL=portfolio-list-page.c8abdc2d.chunk.js.map