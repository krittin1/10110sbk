(this.webpackJsonp10110sbk=this.webpackJsonp10110sbk||[]).push([[0],{121:function(e,t,a){e.exports=a(254)},126:function(e,t,a){},127:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(98),c=a.n(i),r=(a(126),a(15)),m=a(16),s=a(23),u=a(17),o=a(24),h=(a(127),a(40)),d=a(258),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a.state={activeItem:"home"},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.activeItem.activeItem;return l.a.createElement("div",null,l.a.createElement(d.a,{inverted:!0},l.a.createElement(h.b,{to:"/10110sbk"},l.a.createElement(d.a.Item,{name:"home",active:"home"===e,onClick:this.handleItemClick})),l.a.createElement(h.b,{to:"/create"},l.a.createElement(d.a.Item,{name:"create",active:"create"===e,onClick:this.handleItemClick}))))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",null,"Hello This is Home Page"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFirstnameChange=function(e){a.setState({firstName:e.target.value})},a.handleLastnameChange=function(e){a.setState({lastName:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handlePhoneChange=function(e){a.setState({phone:e.target.value})},a.handleIDChange=function(e){a.setState({id:e.target.value})},a.handleNicknameChange=function(e){a.setState({nickName:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),alert(a.state.firstName+" "+a.state.lastName+" "+a.state.email+" "+a.state.phone+" "+a.state.id+a.state.nickName),a.props.history.push("/10110sbk")},a.state={firstName:"",lastName:"",email:"",phone:"",id:"",nickName:""},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",null,"create your account"),l.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"unstackable two fields"},l.a.createElement("div",{className:"required field"},l.a.createElement("label",null,"First name"),l.a.createElement("div",{className:"ui input"},l.a.createElement("input",{name:"firstName",type:"text",placeholder:"First name",onChange:this.handleFirstnameChange}))),l.a.createElement("div",{className:"required field"},l.a.createElement("label",null,"Last name"),l.a.createElement("div",{className:"ui input"},l.a.createElement("input",{name:"lastName",type:"text",placeholder:"Last name",onChange:this.handleLastnameChange})))),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"required field"},l.a.createElement("label",null,"Email"),l.a.createElement("div",{className:"ui input"},l.a.createElement("input",{name:"email",type:"text",placeholder:"example : user@gmail.com",onChange:this.handleEmailChange}))),l.a.createElement("div",{className:"required field"},l.a.createElement("label",null,"Phone"),l.a.createElement("div",{className:"ui input"},l.a.createElement("input",{name:"phone",type:"text",placeholder:"xxx-xxxxxxx",onChange:this.handlePhoneChange})))),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"required field"},l.a.createElement("label",null,"Student ID"),l.a.createElement("div",{className:"ui input"},l.a.createElement("input",{name:"id",type:"text",placeholder:"5910xxxxxx",onChange:this.handleIDChange}))),l.a.createElement("div",{className:"required field"},l.a.createElement("label",null,"Nickname"),l.a.createElement("div",{className:"ui input"},l.a.createElement("input",{name:"nickName",type:"text",placeholder:"Nick name",onChange:this.handleNicknameChange})))),l.a.createElement("button",{type:"submit",className:"ui positive button"},"Submit")))}}]),t}(n.Component),b=a(25),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(p,null),l.a.createElement("div",{className:"ui container"},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/10110sbk",component:E}),l.a.createElement(b.a,{path:"/create",component:v}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(253);c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.0b3cab25.chunk.js.map