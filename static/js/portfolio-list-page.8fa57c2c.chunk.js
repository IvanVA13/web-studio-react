(this["webpackJsonpweb-studio-react"]=this["webpackJsonpweb-studio-react"]||[]).push([[6],{149:function(e,t,o){"use strict";o(1);var a=o(164),i=o.n(a),r=o(34),p=o(2),l=function(e){var t=e.type,o=e.container,a=e.title,l=e.children,d=function(){return Object(p.jsxs)(r.a,{type:o,children:[a&&"main"===t&&Object(p.jsx)("h1",{className:i.a.hero__title,children:a}),a&&"main"!==t&&Object(p.jsx)("h2",{className:i.a.section__title,children:a}),l]})};return"main"===t?Object(p.jsx)("section",{className:i.a.hero,children:d()}):"desctop"===t?Object(p.jsx)("section",{className:"".concat(i.a.section," ").concat(i.a["section--pad-top"]," ").concat(i.a["section--hidden"]),children:d()}):"second"===t?Object(p.jsx)("section",{className:"".concat(i.a.section," ").concat(i.a["section--bg-color"]),children:d()}):t?void 0:Object(p.jsx)("section",{className:i.a.section,children:d()})};l.defaultProps={type:"",title:"",container:""},t.a=l},150:function(e,t,o){"use strict";var a=o(149);o.d(t,"a",(function(){return a.a}))},154:function(e,t,o){e.exports={"google-reg-link":"Reg-form_google-reg-link__2QOJQ","form-link":"Reg-form_form-link__1lShV",image:"Reg-form_image__OuwiR",button:"Reg-form_button__3Kz44","form-title":"Reg-form_form-title__3AMox","image--margin":"Reg-form_image--margin__1OcBr",button__icon:"Reg-form_button__icon__1Adkp",form:"Reg-form_form__1OFJW","form-container":"Reg-form_form-container__19byQ","form-btn":"Reg-form_form-btn__PSCzj","google-reg-icon":"Reg-form_google-reg-icon__3eEzH","form-label":"Reg-form_form-label__22Ags","form-label__radio":"Reg-form_form-label__radio__TV6Kq","form-radio-btn":"Reg-form_form-radio-btn__30r_1","form-input":"Reg-form_form-input__2dU37","form-error":"Reg-form_form-error__2f5Lm","form-desc":"Reg-form_form-desc__1eJ1l"}},164:function(e,t,o){e.exports={section:"Section_section__2wWoo","section--pad-top":"Section_section--pad-top__2zE07","section--hidden":"Section_section--hidden__yoCCN","section--bg-color":"Section_section--bg-color__30pWN",section__title:"Section_section__title__1tXxJ","section__title--hidden":"Section_section__title--hidden__cf7tj",hero:"Section_hero__Vdh3L",hero__title:"Section_hero__title__3rvi0"}},208:function(e,t,o){e.exports={"portfolio-work-link":"PortfolioList_portfolio-work-link__2WKiN",image:"PortfolioList_image__29Myh","portfolio-work-description":"PortfolioList_portfolio-work-description__32rdP",button:"PortfolioList_button__UHnUB","portfolio-wrapper":"PortfolioList_portfolio-wrapper__2DV3L","portfolio-sorting-list":"PortfolioList_portfolio-sorting-list__2l_DJ","portfolio-work-list":"PortfolioList_portfolio-work-list__neX34","portfolio-work-title":"PortfolioList_portfolio-work-title__Qpwx0","image--margin":"PortfolioList_image--margin__1359U",button__icon:"PortfolioList_button__icon__1qcOQ","portfolio-wrapper-item":"PortfolioList_portfolio-wrapper-item__3QOAZ","portfolio-sorting-item":"PortfolioList_portfolio-sorting-item__uRumO","portfolio-sorting-btn":"PortfolioList_portfolio-sorting-btn__3SSAc","portfolio-work-item":"PortfolioList_portfolio-work-item__3JqsW","portfolio-work-container":"PortfolioList_portfolio-work-container__2ehWE","portfolio-work-type":"PortfolioList_portfolio-work-type__3_Cbv"}},318:function(e,t,o){"use strict";o.r(t);var a=o(18),i=o(9),r=o(67),p=o(5),l=o(3),d=o(2);t.default=function(){var e=Object(a.b)(),t=Object(i.g)();return t?(e(Object(p.g)(t.params.id)),Object(d.jsx)(i.a,{to:l.a.home})):Object(d.jsx)(r.a,{})}},319:function(e,t,o){"use strict";o.r(t);var a=o(20),i=o(33),r=o(37),p=(o(1),o(18)),l=o(162),d=o(163),s=o(5),n=o(154),c=o.n(n),m=o(2),u=["label"],j=function(e){var t=e.label,o=Object(r.a)(e,u),p=Object(l.d)(o),d=Object(i.a)(p,2),s=d[0],n=d[1];return Object(m.jsxs)("div",{className:c.a["form-container"],children:[Object(m.jsxs)("label",{className:c.a["form-label"],htmlFor:o.id||o.name,children:[t,n.touched&&n.error?Object(m.jsxs)("div",{className:c.a["form-error"],children:["*",n.error]}):null]}),Object(m.jsx)("input",Object(a.a)(Object(a.a)({className:c.a["form-input"]},s),o))]})};t.default=function(){var e=Object(p.b)();return Object(m.jsx)(l.c,{initialValues:{email:""},validationSchema:d.b({email:d.c().email("\u0423\u043a\u0430\u0437\u0430\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")}),onSubmit:function(t,o){var a=o.setSubmitting,i=o.resetForm;e(Object(s.f)(t)),a(!1),i()},children:Object(m.jsxs)(l.b,{className:c.a.form,children:[Object(m.jsx)("p",{className:c.a["form-desc"],children:"\u0412\u044b\u0441\u043b\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0434\u043b\u044f \u0432\u0435\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438"}),Object(m.jsx)(j,{label:"Email",name:"email",type:"email",placeholder:"user@webstudio.com",autoComplete:"off"}),Object(m.jsx)("button",{className:c.a["form-btn"],type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})}},323:function(e,t,o){"use strict";o.r(t);var a=o(33),i=o(1),r=o.n(i),p=o(15),l=o(10),d=o(6),s=o(165),n=o(12),c=(o(7),o(42));function m(e,t){var o=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){o[e.key]=function(e){return t&&Object(i.isValidElement)(e)?t(e):e}(e)})),o}function u(e,t,o){return null!=o[t]?o[t]:e.props[t]}function j(e,t,o){var a=m(e.children),r=function(e,t){function o(o){return o in t?t[o]:e[o]}e=e||{},t=t||{};var a,i=Object.create(null),r=[];for(var p in e)p in t?r.length&&(i[p]=r,r=[]):r.push(p);var l={};for(var d in t){if(i[d])for(a=0;a<i[d].length;a++){var s=i[d][a];l[i[d][a]]=o(s)}l[d]=o(d)}for(a=0;a<r.length;a++)l[r[a]]=o(r[a]);return l}(t,a);return Object.keys(r).forEach((function(p){var l=r[p];if(Object(i.isValidElement)(l)){var d=p in t,s=p in a,n=t[p],c=Object(i.isValidElement)(n)&&!n.props.in;!s||d&&!c?s||!d||c?s&&d&&Object(i.isValidElement)(n)&&(r[p]=Object(i.cloneElement)(l,{onExited:o.bind(null,l),in:n.props.in,exit:u(l,"exit",e),enter:u(l,"enter",e)})):r[p]=Object(i.cloneElement)(l,{in:!1}):r[p]=Object(i.cloneElement)(l,{onExited:o.bind(null,l),in:!0,exit:u(l,"exit",e),enter:u(l,"enter",e)})}})),r}var g=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},b=function(e){function t(t,o){var a,i=(a=e.call(this,t,o)||this).handleExited.bind(Object(s.a)(a));return a.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},a}Object(n.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var o,a,r=t.children,p=t.handleExited;return{children:t.firstRender?(o=e,a=p,m(o.children,(function(e){return Object(i.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:u(e,"appear",o),enter:u(e,"enter",o),exit:u(e,"exit",o)})}))):j(e,r,p),firstRender:!1}},o.handleExited=function(e,t){var o=m(this.props.children);e.key in o||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var o=Object(d.a)({},t.children);return delete o[e.key],{children:o}})))},o.render=function(){var e=this.props,t=e.component,o=e.childFactory,a=Object(l.a)(e,["component","childFactory"]),i=this.state.contextValue,p=g(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,null===t?r.a.createElement(c.a.Provider,{value:i},p):r.a.createElement(c.a.Provider,{value:i},r.a.createElement(t,a,p))},t}(r.a.Component);b.propTypes={},b.defaultProps={component:"div",childFactory:function(e){return e}};var v=b,x=o(144),h=o(48),_=o.n(h),f=o(3),w=o(34),y=o(208),k=o.n(y),z=o(2),C=function(){return _.a.generate()},A=[{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/tekhnokryak_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/tekhnokryak_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/tekhnokryak.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/tekhnokryak_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/tekhnokryak_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/tekhnokryak.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/tekhnokryak_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/tekhnokryak.jpg",name:"\u0422\u0435\u0445\u043d\u043e\u043a\u0440\u044f\u043a",desc:"\u0422\u0435\u0445\u043d\u043e\u043a\u0440\u044f\u043a \u044d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0430. \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u044d\u0442\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0433\u043e \u0448\u043f\u0438\u043e\u043d\u0430\u0436\u0430 \u0438 \u0430\u0442\u0430\u043a \u043d\u0430 \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0432.",link:"".concat(f.a.portfolio),id:1,type:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/poster-new-orlean-vs-golden-star_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/poster-new-orlean-vs-golden-star_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/poster-new-orlean-vs-golden-star.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/poster-new-orlean-vs-golden-star_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/poster-new-orlean-vs-golden-star_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/poster-new-orlean-vs-golden-star.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/poster-new-orlean-vs-golden-star_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/poster-new-orlean-vs-golden-star.jpg",name:"New Orlean vs Golden Star",desc:"New Orlean vs Golden Star",link:"".concat(f.a.portfolio),id:2,type:"\u0414\u0438\u0437\u0430\u0439\u043d"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/restoran-seafood_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/restoran-seafood_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/restoran-seafood.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/restoran-seafood_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/restoran-seafood_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/restoran-seafood.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/restoran-seafood_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/restoran-seafood.jpg",name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d Seafood",desc:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d Seafood",link:"".concat(f.a.portfolio),id:3,type:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-prime_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-prime_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-prime.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-prime_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-prime_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-prime.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-prime_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-prime.jpg",name:"\u041f\u0440\u043e\u0435\u043a\u0442 Prime",desc:"\u041f\u0440\u043e\u0435\u043a\u0442 Prime",link:"".concat(f.a.portfolio),id:4,type:"\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-boxes_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-boxes_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-boxes.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-boxes_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-boxes_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-boxes.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-boxes_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-boxes.jpg",name:"\u041f\u0440\u043e\u0435\u043a\u0442 Boxes",desc:"\u041f\u0440\u043e\u0435\u043a\u0442 Boxes",link:"".concat(f.a.portfolio),id:5,type:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/inspiration-has-no-borders_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/inspiration-has-no-borders_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/inspiration-has-no-borders.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/inspiration-has-no-borders_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/inspiration-has-no-borders_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/inspiration-has-no-borders.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/inspiration-has-no-borders_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/inspiration-has-no-borders.jpg",name:"Inspiration has no Borders",desc:"Inspiration has no Borders",link:"".concat(f.a.portfolio),id:6,type:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/izdanie-limited-edition_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/izdanie-limited-edition_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/izdanie-limited-edition.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/izdanie-limited-edition_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/izdanie-limited-edition_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/izdanie-limited-edition.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/izdanie-limited-edition_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/izdanie-limited-edition.jpg",name:"\u0418\u0437\u0434\u0430\u043d\u0438\u0435 Limited Edition",desc:"\u0418\u0437\u0434\u0430\u043d\u0438\u0435 Limited Edition",link:"".concat(f.a.portfolio),id:7,type:"\u0414\u0438\u0437\u0430\u0439\u043d"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/project-lab_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/project-lab_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-lab.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/project-lab_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/project-lab_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-lab.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/project-lab_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/project-lab.jpg",name:"\u041f\u0440\u043e\u0435\u043a\u0442 LAB",desc:"\u041f\u0440\u043e\u0435\u043a\u0442 LAB",link:"".concat(f.a.portfolio),id:8,type:"\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433"},{"pic-source":[{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/desktop/growing-business_2x.webp 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/tablet/growing-business_2x.webp 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/growing-business.webp 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/webp/mobile/growing-business_2x.webp 2x"},{desktop:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business_2x.jpg 2x",tablet:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/tablet/growing-business_2x.jpg 2x",mobile:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/growing-business.jpg 1x, https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/mobile/growing-business_2x.jpg 2x"}],image:"https://res.cloudinary.com/djp4ztej6/image/upload/v1640113793/CloudAvatar/image/jpg/desktop/growing-business.jpg",name:"Growing Business",desc:"Growing Business",link:"".concat(f.a.portfolio),id:9,type:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}],O=["\u0412\u0441\u0435","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u044b","\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","\u0414\u0438\u0437\u0430\u0439\u043d","\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433"],N=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(A),o=Object(a.a)(t,2),r=o[0],l=o[1],d=Object(i.useState)("\u0412\u0441\u0435"),s=Object(a.a)(d,2),n=s[0],c=s[1],m=function(e){var t=e.target.textContent;c("\u0412\u0441\u0435"!==t?t.slice(0,-1):t)};return Object(i.useEffect)((function(){return l("\u0412\u0441\u0435"!==n?A.filter((function(e){return e.type.includes(n)})):A)}),[n]),Object(z.jsxs)("ul",{className:k.a["portfolio-wrapper"],children:[Object(z.jsx)("li",{className:k.a["portfolio-wrapper-item"],children:Object(z.jsx)(w.a,{children:Object(z.jsx)("ul",{className:k.a["portfolio-sorting-list"],children:O.map((function(e){return Object(z.jsx)("li",{className:k.a["portfolio-sorting-item"],children:Object(z.jsx)("button",{className:"".concat(k.a.button," ").concat(k.a["portfolio-sorting-btn"]),type:"button",onClick:m,children:e})},C())}))})})}),Object(z.jsx)("li",{className:k.a["portfolio-wrapper-item"],children:Object(z.jsx)(w.a,{children:Object(z.jsx)(v,{component:"ul",className:k.a["portfolio-work-list"],children:r.map((function(t){var o=t.image,i=t.name,r=t.desc,l=t.link,d=t.id,s=t.type,n=Object(a.a)(t["pic-source"],2),c=n[0],m=n[1];return Object(z.jsx)(x.a,{ref:e,timeout:500,classNames:"scale-anim",children:Object(z.jsx)("li",{ref:e,className:k.a["portfolio-work-item"],children:Object(z.jsxs)(p.b,{to:"".concat(l,"/").concat(d),className:k.a["portfolio-work-link"],children:[Object(z.jsxs)("div",{className:k.a["portfolio-work-container"],children:[Object(z.jsxs)("picture",{children:[Object(z.jsx)("source",{srcSet:c.desktop,media:"(min-width: 1200px)"}),Object(z.jsx)("source",{srcSet:c.tablet,media:"(min-width: 768px)"}),Object(z.jsx)("source",{srcSet:c.mobile,media:"(max-width: 767px)"}),Object(z.jsx)("source",{srcSet:m.desktop,media:"(min-width: 1200px)"}),Object(z.jsx)("source",{srcSet:m.tablet,media:"(min-width: 768px)"}),Object(z.jsx)("source",{srcSet:m.mobile,media:"(max-width: 767px)"}),Object(z.jsx)("img",{className:k.a.image,src:o,alt:i,width:"450"})]}),Object(z.jsx)("p",{className:k.a["portfolio-work-description"],children:r})]}),Object(z.jsx)("h2",{className:k.a["portfolio-work-title"],children:i}),Object(z.jsx)("p",{className:k.a["portfolio-work-type"],children:s})]})})},C())}))})})})]})},S=o(150);t.default=function(){return Object(z.jsx)("main",{children:Object(z.jsx)(S.a,{container:"hide",children:Object(z.jsx)(N,{})})})}}}]);
//# sourceMappingURL=portfolio-list-page.8fa57c2c.chunk.js.map