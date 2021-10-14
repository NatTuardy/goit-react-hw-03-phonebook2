(this["webpackJsonpgoit-react-hw-03-phonebook2"]=this["webpackJsonpgoit-react-hw-03-phonebook2"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=(n(17),n(10)),o=n(3),l=n(5),u=n(6),b=n(8),m=n(7),d=(n(18),n(2)),h=n(12),j=n(0),f=function(e){var t=Object(d.a)({},e);return Object(j.jsxs)("div",{className:"mb-3",children:[t.label&&Object(j.jsx)("label",{htmlFor:t.id,className:"form-label",children:t.label}),Object(j.jsx)("input",Object(d.a)({},t))]})},O={name:"name",type:"text",className:"form-control",id:"inputName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,label:"Name"},p={name:"number",type:"tel",className:"form-control",id:"inputTelephone",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,label:"Number"},g=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.value,c=n.name;e.setState(Object(o.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault();var n=Object(h.generate)(),a=e.state,c={id:n,name:a.name,number:a.number};e.props.onSubmit(c),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-control mb-3",children:[Object(j.jsx)(f,Object(d.a)(Object(d.a)({},O),{},{value:t,onChange:this.handleChange})),Object(j.jsx)(f,Object(d.a)(Object(d.a)({},p),{},{value:n,onChange:this.handleChange})),Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add contact"})})]})})}}]),n}(a.Component),v=function(e){var t=e.data,n=e.onDelete,a=t.map((function(e){var t=e.name,a=e.id,c=e.number;return Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start ",children:[t,": ",c,Object(j.jsx)("button",{onClick:function(){return n(a)},type:"submit",className:"btn btn-primary align-items-end btn-sm",children:"Delete"})]},a)}));return Object(j.jsx)(j.Fragment,{children:a})},x=function(e){var t=e.data,n=e.onDelete;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Contacts"}),Object(j.jsx)("ul",{className:"list-group d-grid gap-2 d-md-flex justify-content-center",children:Object(j.jsx)(v,{data:t,onDelete:n})})]})},y=function(e){var t=e.onChange,n=e.filter;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Find contacts by name:"}),Object(j.jsx)("div",{className:"form-control col-md-6",children:Object(j.jsx)("input",{className:"form-control col-md-3",onChange:t,name:"filter",value:n,type:"text"})})]})},C=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.handleFilter=function(){var t=e.state,n=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e.handleChange=function(t){var n=t.target,a=n.value,c=n.name;e.setState(Object(o.a)({},c,a))},e.handleSubmit=function(t){e.setState((function(e){var n=e.contacts,a=n.find((function(e){return e.name===t.name}));if(!a)return{contacts:[].concat(Object(i.a)(n),[t]),name:"",number:""};alert("".concat(a.name," is already in contacts"))}))},e.handleDelete=function(t){e.setState((function(e){var n=e.contacts;return{contacts:Object(i.a)(n).filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.handleChange,t=this.handleSubmit,n=this.handleFilter,a=this.handleDelete,c=this.state,r=c.contacts,s=c.filter;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"App-header",children:"Phonebook"}),Object(j.jsx)(g,{onSubmit:t}),Object(j.jsx)(y,{onChange:e,data:r,filter:s}),Object(j.jsx)(x,{data:n(),onDelete:a})]})}}]),n}(a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(28);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),N()}},[[29,1,2]]]);
//# sourceMappingURL=main.de5cac56.chunk.js.map