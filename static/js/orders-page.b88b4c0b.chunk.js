(this["webpackJsonpweb-studio-react"]=this["webpackJsonpweb-studio-react"]||[]).push([[6],{317:function(e,r,t){e.exports={button:"OrderList_button__3pFxC","order-btn":"OrderList_order-btn__1V1xE","order-list":"OrderList_order-list__BfMMY","order-title":"OrderList_order-title__2oypw",button__icon:"OrderList_button__icon__3toYv","order-container":"OrderList_order-container__3m-OL","order-item":"OrderList_order-item__1c3h2","order-date":"OrderList_order-date__3HGVr","order-desc":"OrderList_order-desc__3lJ4Z","order-desc-header":"OrderList_order-desc-header__3HQr6","order-type":"OrderList_order-type__2L0_b","order-comment":"OrderList_order-comment__30MMC","order-status":"OrderList_order-status__3p0uS","order-status-new":"OrderList_order-status-new__mSvyZ","order-status-done":"OrderList_order-status-done__3P-pP","order-status-cancel":"OrderList_order-status-cancel__1d9X7","order-status-header":"OrderList_order-status-header__l25-g"}},329:function(e,r,t){"use strict";t.r(r);var c=t(1),s=t(317),d=t.n(s),a=t(36),o=t(17),n=t(56),i=t(2),_=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e(Object(n.fetchOrders)())}),[e]);var r=Object(o.c)(n.getAllOrders),t=function(r){e(Object(n.updateOrderStatus)(r.currentTarget.id))};return Object(i.jsxs)(a.a,{type:"order",children:[Object(i.jsx)("h2",{className:d.a["order-title"],children:"\u0417\u0430\u043a\u0430\u0437\u044b"}),Object(i.jsxs)("ul",{className:d.a["order-list"],children:[Object(i.jsxs)("li",{className:"".concat(d.a["order-item"]," ").concat(d.a["order-item-header"]),children:[Object(i.jsx)("p",{className:d.a["order-date"],children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(i.jsxs)("div",{className:"".concat(d.a["order-desc"]," ").concat(d.a["order-desc-header"]),children:[Object(i.jsx)("p",{className:"".concat(d.a["order-type"]),children:"\u0423\u0441\u043b\u0443\u0433\u0430"}),Object(i.jsx)("p",{className:"".concat(d.a["order-comment"]," ").concat(d.a["order-comment-header"]),children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"})]}),Object(i.jsx)("p",{className:"".concat(d.a["order-status"]," ").concat(d.a["order-status-header"]),children:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430"})]},"header of order list"),r.map((function(e){var r=e._id,c=e.productType,s=e.createdAt,a=e.comment,o=e.status,n=e.btn,_=new Date(s),l="".concat(_.toLocaleString()),u=c?"".concat(c[0].toUpperCase()).concat(c.slice(1)):"";return Object(i.jsxs)("li",{className:d.a["order-item"],children:[Object(i.jsx)("p",{className:d.a["order-date"],children:l}),Object(i.jsxs)("div",{className:"".concat(d.a["order-desc"]),children:[Object(i.jsx)("p",{className:"".concat(d.a["order-type"]),children:u}),Object(i.jsx)("p",{className:"".concat(d.a["order-comment"]),children:a})]}),Object(i.jsx)("p",{className:"".concat(d.a["order-status"]," ").concat(d.a["order-status-".concat(o)]),children:o}),!n&&Object(i.jsx)("button",{className:"".concat(d.a.button," ").concat(d.a["order-btn"]),type:"button",id:r,disabled:"new"!==o,onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]},r)}))]})]})};r.default=function(){return Object(i.jsx)("main",{children:Object(i.jsx)(_,{})})}}}]);
//# sourceMappingURL=orders-page.b88b4c0b.chunk.js.map