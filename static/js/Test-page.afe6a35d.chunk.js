(this["webpackJsonpweb-studio-react"]=this["webpackJsonpweb-studio-react"]||[]).push([[1],{299:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),l=i(127),n=i(128),r=i(3);const c=e=>{let{children:t,initialValues:i,onSubmit:n}=e;const[c,m]=Object(a.useState)(0),o=s.a.Children.toArray(t),[d,b]=Object(a.useState)(i),j=o[c],u=o.length,h=c===u-1;return Object(r.jsx)(l.d,{initialValues:d,onSubmit:async(e,t)=>{if(j.props.onSubmit&&await j.props.onSubmit(e,t),h)return n(e,t);t.setTouched({}),(e=>{b(e),m(Math.min(c+1,u-1))})(e)},validationSchema:j.props.validationSchema,children:e=>Object(r.jsxs)(l.c,{children:[Object(r.jsxs)("p",{children:["Step ",c+1," of ",u]}),j,Object(r.jsxs)("div",{style:{display:"flex"},children:[c>0&&Object(r.jsx)("button",{onClick:()=>{return t=e.values,b(t),void m(Math.max(c-1,0));var t},type:"button",children:"Back"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{disabled:e.isSubmitting,type:"submit",children:h?"Submit":"Next"})})]})]})})},m=e=>{let{children:t}=e;return t};t.default=()=>Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Formik Multistep Wizard"}),Object(r.jsxs)(c,{initialValues:{email:"",firstName:"",lastName:""},onSubmit:async e=>{return(t=300,new Promise((e=>setTimeout(e,t)))).then((()=>console.log("Wizard submit",e)));var t},children:[Object(r.jsxs)(m,{onSubmit:()=>console.log("Step1 onSubmit"),validationSchema:n.b({firstName:n.c().required("required"),lastName:n.c().required("required")}),children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(r.jsx)(l.b,{autoComplete:"given-name",component:"input",id:"firstName",name:"firstName",placeholder:"First Name",type:"text"}),Object(r.jsx)(l.a,{className:"error",component:"div",name:"firstName"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(r.jsx)(l.b,{autoComplete:"family-name",component:"input",id:"lastName",name:"lastName",placeholder:"Last Name",type:"text"}),Object(r.jsx)(l.a,{className:"error",component:"div",name:"lastName"})]})]}),Object(r.jsx)(m,{onSubmit:()=>console.log("Step2 onSubmit"),validationSchema:n.b({email:n.c().email("Invalid email address").required("required")}),children:Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)(l.b,{autoComplete:"email",component:"input",id:"email",name:"email",placeholder:"Email",type:"text"}),Object(r.jsx)(l.a,{className:"error",component:"div",name:"email"})]})})]})]})}}]);
//# sourceMappingURL=Test-page.afe6a35d.chunk.js.map