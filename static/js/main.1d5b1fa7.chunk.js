(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],[,,,function(e,a,t){e.exports=t(17)},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l);t(12),t(13);var m=e=>{let{children:a}=e;return r.a.createElement("div",{className:"container"},a)};const s=[{name:"EUR - Unia Europejska",shortName:"EUR",rate:4.42},{name:"USD - USA",shortName:"USD",rate:4.06},{name:"GBP - W. Brytania",shortName:"GBP",rate:5.15},{name:"CHF - Szwajcaria",shortName:"CHF",rate:4.53},{name:"AUD - Australia",shortName:"AUD",rate:2.71}];t(14),t(15);var u=e=>{let{result:a}=e;return r.a.createElement("span",{className:"result--rate"},a&&r.a.createElement(r.a.Fragment,null,"1 ",a.currency," = ",a.rate," PLN"))};t(16);var o=e=>{let{result:a}=e;return r.a.createElement("span",{className:"result--amount"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,a.toAmount.toFixed(2)," PLN")))};var i=e=>{let{result:a,calculateResult:t}=e;const[l,c]=Object(n.useState)(s[0].shortName),[m,i]=Object(n.useState)("");return r.a.createElement("form",{className:"container",onSubmit:e=>{e.preventDefault(),t(l,m)}},r.a.createElement("fieldset",{className:"form__fieldset"},r.a.createElement("legend",{className:"form__legend"},"Kalkulator walutowy"),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("span",{className:"form__labelText"},"Wpisz kwot\u0119*:"),r.a.createElement("input",{value:m,onChange:e=>{let{target:a}=e;return i(a.value)},className:"form__labelField",type:"number",name:"amount",placeholder:"Wpisz kwot\u0119 w PLN",step:"any",min:"1",autoFocus:!0,required:!0}))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("span",{className:"form__labelText"},"Waluta:"),r.a.createElement("select",{value:l,onChange:e=>{let{target:a}=e;return c(a.value)},className:"form__labelField form__labelField--shorter",name:"currency"},s.map(e=>r.a.createElement("option",{key:e.shortName,value:e.shortName},e.name))))),r.a.createElement("p",{className:"form__paragraph--centered"},"Aktualny kurs:",r.a.createElement(u,{result:a})),r.a.createElement("button",{className:"form__button"},"Przelicz"),r.a.createElement("p",{className:"result__name"},"Twoja krota wynosi:",r.a.createElement(o,{result:a})),r.a.createElement("p",{className:"form__paragraph--fontSmall"},"Pola wymagane oznaczone s\u0105 *")))};var E=function(){const[e,a]=Object(n.useState)();return r.a.createElement(m,null,r.a.createElement(i,{result:e,calculateResult:(e,t)=>{const n=s.find(a=>{let{shortName:t}=a;return t===e}).rate;a({toAmount:t*n,currency:e,rate:n})}}))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:n,getFCP:r,getLCP:l,getTTFB:c}=a;t(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null))),p()}],[[3,1,2]]]);
//# sourceMappingURL=main.1d5b1fa7.chunk.js.map