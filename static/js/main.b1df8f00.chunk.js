(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{14:function(e,t,n){e.exports=n(39)},19:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(12),i=n.n(c),r=(n(19),n(2)),s=(n(20),n(13)),l=n.n(s);n(38);var u=function(){var e=Object(a.useState)({main:{temp:" "}}),t=Object(r.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(),i=Object(r.a)(c,2),s=i[0],u=i[1];return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{type:"text",id:"city",className:"form-control",placeholder:"Enter the city","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:function(){console.log("todos is getting executed");var e=document.getElementById("city").value;l.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=23115c617732be5077c954f6e8f4d9e6")).then((function(e){console.log(e),n(e.data),u((e.data.main.temp-273.15).toFixed(2)+" \xb0C")})).catch((function(e){console.log(e)})).then((function(){}))}},"OK"))),o.a.createElement("p",{className:"h4"},"Temperature is: ",s))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b1df8f00.chunk.js.map