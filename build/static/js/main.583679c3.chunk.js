(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),l=n.n(c),s=n(1),r=n.n(s),i=n(3),u=n(5),d=(n(17),n(8)),m=n(2),p=n(10);const b="https://crudcrud.com/api/11e0909725cb47649bd825a5a6f7fa0e/tasks",f=()=>fetch(b,{method:"GET"}).then(e=>e.json()),E=e=>fetch(b,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()),v=e=>{let t=e._id,n=Object(p.a)(e,["_id"]);return console.log("update function start"),fetch("".concat(b,"/").concat(t),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then(e=>{200!==e.status&&console.log("error updating")})},h=e=>fetch("".concat(b,"/").concat(e._id),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),y={todos:[{id:1,title:"New task...",status:"new",body:"Add notes..."}],activeTodo:(void 0).todos[0]};var N=Object(d.a)((e=y,t)=>{switch(t.type){case"TODO_ADD":return Object(m.a)({},e);case"TODO_UPDATE":case"TODO_DELETE":default:return e}});var O=({item:e,onSelect:t,onDelete:n,onComplete:a})=>"new"===e.status?o.a.createElement("li",null,o.a.createElement("button",{className:"button task-button",onClick:()=>t(e)},e.title),o.a.createElement("button",{className:"button button-small button-delete",onClick:()=>n(e)},"X")):o.a.createElement("li",null,o.a.createElement("button",{className:"button task-button",onClick:()=>t(e)},e.title),o.a.createElement("button",{className:"button button-small button-complete"},"\u2714"));var k=({items:e,onAdd:t,onSelect:n,onDelete:a,onComplete:c})=>o.a.createElement("div",{className:"app-column"},o.a.createElement("div",{className:"header app-header"},o.a.createElement("div",{className:"app-title"},"To-Do App"),o.a.createElement("button",{className:"button button-medium button-add",value:"Add",onClick:()=>t()},"Add")),o.a.createElement("div",{className:"task-list"},o.a.createElement("ul",null,e&&e.map(e=>o.a.createElement(O,{key:e._id,item:void 0!==e&&e,onSelect:n,onDelete:a,onComplete:c})))));var j=({active:e,onUpdateTask:t,onComplete:n,onDelete:a})=>o.a.createElement("div",{className:"app-column"},o.a.createElement("div",{className:"header task-header"},o.a.createElement("input",{className:"title-input",type:"text",value:e?e.title:"",onChange:n=>t(e,n.target.value)}),o.a.createElement("button",{className:"button button-large button-complete",onClick:()=>n(e)},"Complete")," ",o.a.createElement("button",{className:"button button-large button-delete",onClick:()=>a(e)},"Remove")," "),o.a.createElement("div",{className:"task-body"},o.a.createElement("textarea",{className:"body-text",type:"text",value:e?e.body:"",onChange:n=>t(e,void 0,n.target.value)})));const w=()=>({title:"New task...",status:"new",body:"Add notes..."});function D(e){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(w()).then(e=>[...t,e]);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(){const e=Object(a.useState)(void 0),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(void 0),s=Object(u.a)(l,2),d=s[0],p=s[1];N.getState();function b(){return(b=Object(i.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e){const t=function(e,t){let n=e.filter(e=>e._id!==t._id);return h(t),n}(n,e);c(t),p(t[0])}return Object(a.useEffect)(()=>{f().then(e=>{c(e),p(e[0])})},[]),o.a.createElement("div",{className:"wrapper"},o.a.createElement(k,{items:n,onAdd:function(){return b.apply(this,arguments)},onSelect:function(e){p(e)},onDelete:E}),o.a.createElement(j,{active:d,onUpdateTask:function(e,t,a){const o=function(e,t,n,a){let o=Object(m.a)({},t);return void 0!==n&&(o.title=n),void 0!==a&&(o.body=a),e[e.findIndex(e=>e._id===o._id)]=o,v(o),[...e]}(n,e,t,a);p(o.find(t=>t._id===e._id)),c(o)},onComplete:function(e){const t=function(e,t){let n=Object(m.a)({},t);return n.status="completed",e[e.findIndex(e=>e._id===n._id)]=n,v(n),[...e]}(n,e);c(t)},onDelete:E}))}const C=document.getElementById("root");l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),C)}},[[11,1,2]]]);
//# sourceMappingURL=main.583679c3.chunk.js.map