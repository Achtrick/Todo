(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var d=c(1),n=c(19),a=c.n(n),i=(c(24),c(2)),o=c(4),s=c.n(o),l=c(8),r=c.n(l),j=c(9),b=c.n(j),u=c(5),h=c.n(u),x=c(0);var O=function(e){return Object(x.jsxs)("div",{className:h.a.todoCard,children:[Object(x.jsx)("div",{align:"right",children:Object(x.jsx)("i",{className:"fas fa-thumbtack fa-lg"})}),Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:e.title})}),Object(x.jsx)("div",{children:r()(e.date).format("DD-MM-YYYY")}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:h.a.handWriting,children:Object(x.jsx)("h4",{children:e.text})})]})},m=Object(d.createContext)({});var g=function(e){var t=Object(d.useState)(""),c=Object(i.a)(t,2),n=c[0],a=c[1],o=Object(d.useState)(""),l=Object(i.a)(o,2),r=l[0],j=l[1],b=Object(d.useState)(""),u=Object(i.a)(b,2),O=u[0],g=u[1],f=Object(d.useContext)(m),p=f.setEditVisible,v=f.toggleBlur,y=f.refreshData;return Object(x.jsxs)("div",{id:"edit-modal",className:h.a.todoEditCard,children:[Object(x.jsx)("h4",{children:"Edit Todo"}),Object(x.jsx)("br",{}),Object(x.jsxs)("form",{onSubmit:function(t){s.a.put("http://localhost:3001/api/updateTodo",{todoId:e.todoId,title:n,text:r,date:O}).then((function(e){"ERROR"===e.data||"SUCCESS"===e.data&&(y(),document.getElementById("update-alert").hidden=!1,setTimeout((function(){document.getElementById("update-alert").hidden=!0}),1500),p(!1),v(!1))})),t.preventDefault()},children:[Object(x.jsx)("div",{className:"form-group w-50",children:Object(x.jsx)("input",{id:"todoTitle",onChange:function(e){a(e.target.value)},style:{marginBottom:"5px"},className:"form-control",type:"text",placeholder:e.title})}),Object(x.jsx)("div",{className:"form-group w-50",children:Object(x.jsx)("textarea",{id:"todoText",onChange:function(e){j(e.target.value)},style:{marginBottom:"5px"},className:"form-control",placeholder:e.text})}),Object(x.jsx)("div",{className:"form-group w-50",children:Object(x.jsx)("input",{id:"todoDate",onChange:function(e){g(e.target.value)},style:{marginBottom:"5px"},className:"form-control",type:"Date",placeholder:e.date.toString()})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"btn btn-success",style:{display:"inline-block"},children:"Update"})})]})]})};var f=function(){var e=Object(d.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(""),o=Object(i.a)(a,2),l=o[0],j=o[1],u=Object(d.useState)(""),h=Object(i.a)(u,2),f=h[0],p=h[1],v=Object(d.useState)(""),y=Object(i.a)(v,2),C=y[0],N=y[1],E=Object(d.useState)(""),T=Object(i.a)(E,2),B=T[0],S=T[1],_=Object(d.useState)(!1),D=Object(i.a)(_,2),I=D[0],k=D[1],w=Object(d.useContext)(m),R=w.editVisible,Y=w.setEditVisible,V=w.todosList,H=w.refreshData,L=w.toggleBlur;function M(e){document.getElementById("dialog").hidden=!e,document.getElementById("controls").hidden=!e}return Object(d.useEffect)((function(){H()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{id:"blurredBackground",hidden:!0,className:b.a.blur,onClick:function(){M(!1),L(!1),k(!1),Y(!1)}}),I?Object(x.jsx)(O,{title:c,text:l,date:f}):null,R?Object(x.jsx)(g,{todoId:B,title:c,text:l,date:f}):null,Object(x.jsxs)("div",{id:"dialog",className:b.a.dialogCard,hidden:!0,children:[Object(x.jsxs)("h5",{children:['Do you really want to delete Todo: "',C,'" ?']}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{id:"controls",hidden:!0,style:{cursor:"pointer",display:"inline-block",position:"absolute",right:"5%"},children:[Object(x.jsx)("button",{className:"btn btn-success",onClick:function(){!function(e){M(!1),L(!1),s.a.delete("http://localhost:3001/api/deletepost/".concat(e)).then((function(e){"ERROR"===e.data||(e.data="SUCCESS")&&(H(),document.getElementById("delete-alert").hidden=!1,setTimeout((function(){document.getElementById("delete-alert").hidden=!0}),1500))}))}(B)},children:"Yes"}),"\xa0",Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){L(!1),M(!1)},children:"No"})]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{id:"alerts",children:[Object(x.jsx)("div",{hidden:!0,id:"success-alert",className:"alert alert-success",children:"Todo created successfully :)"}),Object(x.jsx)("div",{hidden:!0,id:"error-alert",className:"alert alert-danger",children:"An error occured please try again later :("}),Object(x.jsx)("div",{hidden:!0,id:"delete-alert",className:"alert alert-danger",children:"Todo deleted !"}),Object(x.jsx)("div",{hidden:!0,id:"update-alert",className:"alert alert-warning",children:"Todo updated !"})]}),Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("div",{align:"center",children:Object(x.jsx)("h1",{children:"Todo App"})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{id:"Create Todo",children:[Object(x.jsx)("h4",{children:"Create Todo"}),Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.a.post("http://localhost:3001/api/createTodo",{title:c,text:l,date:f}).then((function(e){"ERROR"===e.data?(document.getElementById("error-alert").hidden=!1,setTimeout((function(){document.getElementById("error-alert").hidden=!0}),1500)):"SUCCESS"===e.data&&(H(),document.getElementById("todoTitle").value="",document.getElementById("todoText").value="",document.getElementById("todoDate").value="",document.getElementById("success-alert").hidden=!1,setTimeout((function(){document.getElementById("success-alert").hidden=!0}),1500))}))},children:[Object(x.jsx)("div",{className:"form-group w-50",children:Object(x.jsx)("input",{id:"todoTitle",onChange:function(e){n(e.target.value)},style:{marginBottom:"5px"},className:"form-control",type:"text",placeholder:"Title",required:!0})}),Object(x.jsx)("div",{className:"form-group w-50",children:Object(x.jsx)("textarea",{id:"todoText",onChange:function(e){j(e.target.value)},style:{marginBottom:"5px"},className:"form-control",placeholder:"Text ...",required:!0})}),Object(x.jsx)("div",{className:"form-group w-50",children:Object(x.jsx)("input",{id:"todoDate",onChange:function(e){p(e.target.value)},style:{marginBottom:"5px"},className:"form-control",type:"Date",placeholder:"Date",required:!0})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"btn btn-success",style:{display:"inline-block"},children:"Create"})})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h4",{children:"Todos List"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"Title"}),Object(x.jsx)("th",{scope:"col",children:"Date"}),Object(x.jsx)("th",{scope:"col",children:"Action"})]})}),Object(x.jsx)("tbody",{children:V.map((function(e){return Object(x.jsxs)("tr",{className:b.a.tr,children:[Object(x.jsx)("td",{onClick:function(){n(e.title),j(e.text),p(e.date),L(!0),k(!0)},children:e.title}),Object(x.jsx)("td",{onClick:function(){n(e.title),j(e.text),p(e.date),L(!0),k(!0)},children:r()(e.date).format("DD-MM-YYYY")}),Object(x.jsxs)("td",{children:["\xa0",Object(x.jsx)("button",{onClick:function(){n(e.title),j(e.text),p(e.date),S(e._id),L(!0),Y(!0)},className:"btn btn-warning",children:Object(x.jsx)("i",{className:"far fa-edit"})}),"\xa0",Object(x.jsx)("button",{onClick:function(){M(!0),L(!0),N(e.title),S(e._id)},className:"btn btn-danger",children:Object(x.jsx)("i",{className:"far fa-trash-alt"})})]})]},e._id)}))})]})]})]})]})};var p=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!1),o=Object(i.a)(a,2),l=o[0],r=o[1];return Object(x.jsx)("div",{children:Object(x.jsx)(m.Provider,{value:{todosList:c,setTodosList:n,editVisible:l,setEditVisible:r,toggleBlur:function(e){document.getElementById("blurredBackground").hidden=!e},refreshData:function(){s.a.get("http://localhost:3001/api/getTodos").then((function(e){n(e.data)}))}},children:Object(x.jsx)(f,{})})})};a.a.render(Object(x.jsx)(p,{}),document.getElementById("root"))},5:function(e,t,c){e.exports={todoCard:"Todo_todoCard__1c9-j",todoEditCard:"Todo_todoEditCard__1sDjx",handWriting:"Todo_handWriting__7x534"}},9:function(e,t,c){e.exports={blur:"Home_blur__27gzc",dialogCard:"Home_dialogCard__7iJW_",tr:"Home_tr__1jDHm"}}},[[45,1,2]]]);
//# sourceMappingURL=main.f6ab1321.chunk.js.map