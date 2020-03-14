(this["webpackJsonpreact-markdown-previewer"]=this["webpackJsonpreact-markdown-previewer"]||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(17),o=a.n(l),c=a(18),i=a(9),s=Object(n.createContext)(),d=a(8),m=a(0),u=a(6),p=a(5),h=a.n(p),E=new h.a.Renderer;E.link=function(e,t,a){return'<a target="_blank" href="'.concat(e,'">').concat(a,"</a>")};var b="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";var y=function(){var e=Object(n.useContext)(s),t=e.appState,a=e.dispatch,l=t.maxDisplay,o=t.markdown;return r.a.createElement("div",{id:"display-area",className:"column"},r.a.createElement("header",{id:"display-header",className:"col-head"},r.a.createElement(m.b.Provider,{value:{className:"head-icon"}},r.a.createElement("h1",null,r.a.createElement(d.b,null),"Previewer")),r.a.createElement("button",{id:"display-btn",className:"col-head-btn",onClick:function(){a({type:"SET_MAX_DISPLAY",maxDisplay:!l}),document.getElementById("input-area").classList.toggle("min"),document.getElementById("display-area").classList.toggle("max")}},l?r.a.createElement(u.b,null):r.a.createElement(u.a,null))),r.a.createElement("div",{id:"display-body",className:"col-body"},r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:h()(o,{renderer:E})}})))};var f=function(){var e=Object(n.useContext)(s),t=e.appState,a=e.dispatch,l=t.markdown,o=t.maxInput;return Object(n.useEffect)((function(){a({type:"SET_MARKDOWN_INPUT",markdown:b})}),[a]),r.a.createElement("div",{id:"input-area",className:"column"},r.a.createElement("header",{id:"input-header",className:"col-head"},r.a.createElement(m.b.Provider,{value:{className:"head-icon"}},r.a.createElement("h1",null,r.a.createElement(d.a,null),"Editor")),r.a.createElement("button",{id:"input-btn",className:"col-head-btn",onClick:function(e){a({type:"SET_MAX_INPUT",maxInput:!o}),document.getElementById("input-area").classList.toggle("max"),document.getElementById("display-area").classList.toggle("min")}},o?r.a.createElement(u.b,null):r.a.createElement(u.a,null))),r.a.createElement("div",{id:"input-body",className:"col-body"},r.a.createElement("textarea",{id:"editor",placeholder:b,type:"text",value:l,onChange:function(e){a({type:"SET_MARKDOWN_INPUT",markdown:e.target.value})}})))};a(16);h.a.setOptions({breaks:!0});var v=function(){var e={markdown:"",maxDisplay:!1,maxInput:!1},t=Object(n.useReducer)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_MAX_DISPLAY":return Object(i.a)({},t,{maxDisplay:a.maxDisplay});case"SET_MAX_INPUT":return Object(i.a)({},t,{maxInput:a.maxInput});case"SET_MARKDOWN_INPUT":return Object(i.a)({},t,{markdown:a.markdown});default:return t}}),e),a=Object(c.a)(t,2),l=a[0],o=a[1];return r.a.createElement(s.Provider,{value:{appState:l,dispatch:o}},r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(f,null)))};o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7c43eab1.chunk.js.map