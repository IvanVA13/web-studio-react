(this["webpackJsonpweb-studio-react"]=this["webpackJsonpweb-studio-react"]||[]).push([[9],{150:function(e,o,a){e.exports={"google-reg-link":"Reg-form_google-reg-link__2z96r","form-link":"Reg-form_form-link__2alT0",image:"Reg-form_image__HoTLs",button:"Reg-form_button__1d14i","form-title":"Reg-form_form-title__2P2n4","image--margin":"Reg-form_image--margin__ym3Yt",button__icon:"Reg-form_button__icon__29OBl",form:"Reg-form_form__17u8F","form-container":"Reg-form_form-container__1UwHo","form-btn":"Reg-form_form-btn__dd5EJ","google-reg-icon":"Reg-form_google-reg-icon__j8rkU","form-label":"Reg-form_form-label__2bFCW","form-label__radio":"Reg-form_form-label__radio__3IbTz","form-radio-btn":"Reg-form_form-radio-btn__2lB8v","form-input":"Reg-form_form-input__tLtOH","form-error":"Reg-form_form-error__O7SYS","form-link-second":"Reg-form_form-link-second__1ntGD","form-desc":"Reg-form_form-desc__2Lr8b"}},178:function(e,o,a){"use strict";o.a=a.p+"static/media/google-symbol.6c5bf786.svg"},326:function(e,o,a){"use strict";a.r(o);var r=a(12),t=a(29),l=a(40),m=(a(1),a(17)),c=a(154),i=a(155),n=a(5),s=a(11),b=a(178),f=a(150),_=a.n(f),d=a(2),g=["label"],j=["children"],u=function(e){var o=e.label,a=Object(l.a)(e,g),m=Object(c.d)(a),i=Object(t.a)(m,2),n=i[0],s=i[1];return Object(d.jsxs)("div",{className:_.a["form-container"],children:[Object(d.jsxs)("label",{className:_.a["form-label"],htmlFor:a.id||a.name,children:[o,s.touched&&s.error?Object(d.jsxs)("div",{className:_.a["form-error"],children:["*",s.error]}):null]}),Object(d.jsx)("input",Object(r.a)(Object(r.a)({className:_.a["form-input"]},n),a))]})},p=function(e){var o=e.children,a=Object(l.a)(e,j);return Object(d.jsxs)("label",{className:_.a["form-label__radio"],children:[Object(d.jsx)(c.a,Object(r.a)({className:_.a["form-radio-btn"],type:"radio",value:"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"===o?"male":"female"},a)),o]})};o.default=function(){var e=Object(m.b)();return Object(d.jsx)(c.c,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:"",sex:""},validationSchema:i.b({firstName:i.c().max(25),lastName:i.c().max(25),email:i.c().email("\u0423\u043a\u0430\u0437\u0430\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),phone:i.c().matches(/[0-9]+/,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440").min(12,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 12 \u0446\u0438\u0444\u0440").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:i.c().min(6).required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")}),onSubmit:function(o,a){var r=a.setSubmitting,t=a.resetForm,l={};Object.entries(o).forEach((function(e){e[1]&&(l[e[0]]=e[1])})),e(Object(s.q)(l)),r(!1),t()},children:Object(d.jsxs)(c.b,{className:_.a.form,children:[Object(d.jsx)("h1",{className:_.a["form-title"],children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)(u,{label:"\u0418\u043c\u044f",name:"firstName",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",autoComplete:"off"}),Object(d.jsx)(u,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"lastName",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",autoComplete:"off"}),Object(d.jsx)(u,{label:"Email",name:"email",type:"email",placeholder:"user@webstudio.com",autoComplete:"off"}),Object(d.jsx)(u,{label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone",type:"tel",maxLength:"12",autoCorrect:"true",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",autoComplete:"off"}),Object(d.jsx)(u,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",autoComplete:"off"}),Object(d.jsxs)("div",{className:_.a["form-container"],children:[Object(d.jsx)("div",{className:_.a["form-label"],id:"my-radio-group",children:"\u041f\u043e\u043b"}),Object(d.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",children:[Object(d.jsx)(p,{name:"sex",children:"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"}),Object(d.jsx)(p,{name:"sex",children:"\u0436\u0435\u043d\u0441\u043a\u0438\u0439"})]})]}),Object(d.jsx)("button",{className:"".concat(_.a.button," ").concat(_.a["form-btn"]),type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("a",{href:"".concat(n.a.serverUrl,"/users/google-auth"),className:_.a["google-reg-link"],children:[Object(d.jsx)("img",{src:b.a,alt:"Google Symbol",className:"".concat(_.a.image," ").concat(_.a["google-reg-icon"])}),"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 Google"]})]})})}}}]);
//# sourceMappingURL=register-page.30614732.chunk.js.map