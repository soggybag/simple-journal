(window["webpackJsonpsimple-journal"]=window["webpackJsonpsimple-journal"]||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),u=n.n(c),o=(n(19),n(1)),l=n(4),i=n(8);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentEntry:0},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"SELECT_ENTRY":return y({},e,{currentEntry:r.index});default:return e}},p=n(6),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Entry 1";return[{name:e,date:new Date}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f(),t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case"ADD_ENTRY":var r="Entry ".concat(e.length+1);return[].concat(Object(p.a)(e),[{name:r,date:new Date}]);default:return e}};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u2022";return{text:e,status:t}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"ADD_ENTRY":var a=e[e.length-1].filter((function(e){return">"===e.status})).map((function(e){return b({},e)}));return[].concat(Object(p.a)(e),[a]);case"ADD_ITEM":var c=Object(p.a)(e);return c[r.index]=[].concat(Object(p.a)(c[r.index]),[v(r.text)]),c;case"CHANGE_STATUS":return e.map((function(e,t){return t===r.entryIndex?e.map((function(e,t){return t===r.index?b({},e,{status:r.status}):e})):e}));case"CHANGE_TEXT":return e.map((function(e,t){return t===r.entryIndex?e.map((function(e,t){return t===r.index?b({},e,{text:r.text}):e})):e}));default:return e}},g=Object(l.b)({journal:E,entries:d,items:O}),h=Object(o.b)((function(e){return{entries:e.entries,currentEntry:e.journal.currentEntry}}),{selectEntry:function(e){return{type:"SELECT_ENTRY",payload:{index:e}}}})((function(e){var t=e.entries.map((function(t,n){return a.a.createElement("button",{key:"".concat(t.name,"-").concat(n),onClick:function(){e.selectEntry(n)}},t.name)}));return a.a.createElement("div",null,a.a.createElement("h1",null,"Entries"),t)})),j=n(5),x=Object(o.b)(null,{addItem:function(e,t){return{type:"ADD_ITEM",payload:{index:e,text:t}}}})((function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],u=n[1];return a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"Enter Item",value:c,onChange:function(e){u(e.target.value)}}),a.a.createElement("button",{onClick:function(){e.addItem(e.entryIndex,c),u("")}},"+"))})),w=function(e){var t=Object(r.useState)(e.status||"\u2022"),n=Object(j.a)(t,2),c=n[0],u=n[1];return a.a.createElement("select",{value:c,onChange:function(t){u(t.target.value),e.changeStatus(t.target.value)}},a.a.createElement("option",null,"\u2022"),a.a.createElement("option",null,"X"),a.a.createElement("option",null,">"),a.a.createElement("option",null,"<"),a.a.createElement("option",null,"\u2013"),a.a.createElement("option",null,"!"))},S=Object(o.b)(null,{changeStatus:function(e,t,n){return{type:"CHANGE_STATUS",payload:{entryIndex:e,index:t,status:n}}},changeText:function(e,t,n){return{type:"CHANGE_TEXT",payload:{entryIndex:e,index:t,text:n}}}})((function(e){var t=Object(r.useState)(e.text),n=Object(j.a)(t,2),c=n[0],u=n[1];return a.a.createElement("div",null,a.a.createElement(w,{status:e.status,changeStatus:function(t){e.changeStatus(e.entryIndex,e.index,t)}}),a.a.createElement("input",{placeholder:"enter some text",value:c,onChange:function(e){return u(e.target.value)},onBlur:function(){e.changeText(e.entryIndex,e.index,c)}}))})),D=Object(o.b)((function(e){var t=e.journal,n=e.items;return{currentEntry:t.currentEntry,items:n[t.currentEntry]}}))((function(e){var t=e.items.map((function(t,n){return a.a.createElement(S,{key:"item-".concat(n,"-").concat(e.currentEntry),entryIndex:e.currentEntry,index:n,status:t.status,text:t.text})}));return a.a.createElement("div",null,t)})),I=Object(o.b)((function(e){var t=e.journal,n=e.entries;return{currentEntry:t.currentEntry,entry:n[t.currentEntry]}}),{addEntry:function(e){return{type:"ADD_ENTRY",payload:{name:e}}}})((function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,"Show Entry"),a.a.createElement("h2",null,e.entry.name),a.a.createElement(D,null),a.a.createElement(x,{entryIndex:e.currentEntry}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){e.addEntry()}},"New Entry")))})),T=(n(25),function(){try{var e=localStorage.getItem("SIMPLE_JOURNAL");if(null===e)return;return JSON.parse(e)}catch(t){return}}()),P=Object(l.c)(g,T);P.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("SIMPLE_JOURNAL",t)}catch(n){console.log("Error saving data")}}(P.getState())}));var N=function(){return a.a.createElement(o.a,{store:P},a.a.createElement("div",{className:"App"},a.a.createElement(h,null),a.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.9e5fe833.chunk.js.map