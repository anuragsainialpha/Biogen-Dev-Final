!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,(function(n){return t[n]}).bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s="riMl")}({riMl:function(t,n,r){"use strict";r.r(n);const e=["TransactionCode","DomainName"],o=["Item ID","Party ID","Location ID","Transaction ID","Line ID"];function a(t,n,r,e){const o=function(t,n){return new RegExp("\\b("+t+"|"+n+")(.*?)Xid\\b","g")}(r,e);for(const a in t)if(t.hasOwnProperty(a)){if(a.match(o))continue;if(t[a]!==n[a])return!!a.includes(e+".")}return!0}function i(t,n,r,e){const o={};for(const a in e)e.hasOwnProperty(a)&&(a.includes(t+".")?o[c(a,t,n)]=e[a]:o[a]=r[a]);return o}function c(t,n,r){return t.replace(n+".",n+"."+r+".")}function u(t,n,r,e,o,a,i,c){(function(t,n,r,e){return"Inco Term ID"===t[n]&&!p(r.transaction)&&!p(r.transaction.incoterm)&&!r.transaction.incoterm[e]})(t,n,r,e)||function(t,n,r,e){return"Line Inco Term ID"===t[n]&&!p(r.transaction)&&!p(r.transaction.incoterm)&&!r.transaction.incoterm[e]}(t,n,r,e)||function(t,n,r,e){return"Shipping Condition"===t[n]&&!p(r.transaction)&&!p(r.transaction.other)&&!r.transaction.other[e]}(t,n,r,e)||function(t,n,r,e){return"UOM"===t[n]&&!p(r.transaction)&&!p(r.transaction.quantity)&&!r.transaction.quantity[e]}(t,n,r,e)||function(t,n,r,e){return"Line Quantity UOM"===t[n]&&!p(r.transaction)&&!p(r.transaction.quantity)&&!r.transaction.quantity[e]}(t,n,r,e)||function(t,n,r,e){return"Global Currency Code"===t[n]&&!p(r.transaction)&&!p(r.transaction.currencyCode)&&!r.transaction.currencyCode[e]}(t,n,r,e)||function(t,n,r,e){return"Line Currency"===t[n]&&!p(r.transaction)&&!p(r.transaction.currencyCode)&&!r.transaction.currencyCode[e]}(t,n,r,e)||function(t,n,r,e){return String(t[n][0]).match(/GtmContact(.*?)LocationRef(.*?)CountryCode3Gid(.*?)Xid/)&&!p(r.party.country)&&!r.party.country[e]}(c,n,r,e)||function(t,n,r,e){return"Country Code 2"===t[n]&&!p(r.party)&&!p(r.party.country)&&!r.party.country[e]}(t,n,r,e)||function(t,n,r,e){return"Handling Instructions"===t[n]&&!p(r.transaction)&&!p(r.transaction.other)&&!r.transaction.other[e]}(t,n,r,e)?o.error.push(f(e,t,n,a)):i[c[n]]=e}function s(t,n,r,e,o,a,i,c){t[n].forEach((t,u)=>{""===t.value?function(t,n,r,e,o,a,i,c){String(t[n]).includes("YYYY-MM-DD")&&!d(r)&&e.error.push(f(r,t,n,o)),String(t[n]).includes("YYYY-MM-DD")&&d(r)?a[i.path]=r.replace(/-/gi,"").concat("080000"):function(t,n,r,e){return function(t,n,r,e){return function(t,n){return t[n].match(/[HTS|ECCN] [A-Z][A-Z]/)||"SCHEDULE B"===t[n]}(t,n)&&!r.item.codes[t[n]+" - "+e]}(t,n,r,e)&&!p(r.item.codes)}(t,n,c,r)||function(t,n,r,e){return"Country Of Origin"===t[n]&&!r.item.country[e]}(t,n,c,r)||function(t,n,r,e){return"Line Uom Net Weight"===t[n]&&!p(r.transaction)&&!p(r.transaction.quantity)&&!r.transaction.quantity[e]}(t,n,c,r)||function(t,n,r,e){return"Line Uom Gross Weight"===t[n]&&!p(r.transaction)&&!p(r.transaction.quantity)&&!r.transaction.quantity[e]}(t,n,c,r)||function(t,n,r,e){return"Line Uom Total Packaging Unit Count"===t[n]&&!p(r.transaction)&&!p(r.transaction.quantity)&&!r.transaction.quantity[e]}(t,n,c,r)?e.error.push(f(r,t,n,o)):function(t,n){return"Country Of Origin Substance"===t[n]}(t,n)?c.item.country[r]?a[i.path]=c.item.country[r]:e.error.push(f(r,t,n,o)):function(t,n,r,e){return!p(t.transaction)&&!p(t.transaction.other)&&t.transaction.other&&t.transaction.other[n[r]]&&!t.transaction.other[n[r]][e]}(c,t,n,r)||function(t,n){return t.path.match(/GtmTransactionLine(.*?)(Quantity|Currency)(.*?)(QuantityValue|MonetaryAmount)/)&&isNaN(n)}(i,r)||function(t,n,r){return t.path.match(/GtmTransactionLine(.*?)ItemGid(.*?)Xid/)&&!p(n.transaction)&&n.transaction.items&&!n.transaction.items[n.domain+"."+r]}(i,c,r)||function(t,n,r){return t.path.match(/GtmTransaction(.*?)ContactGid(.*?)Xid/)&&!p(n.transaction)&&n.transaction.contacts&&!n.transaction.contacts[n.domain+"."+r]}(i,c,r)?e.error.push(f(r,t,n,o)):a[i.path]=function(t,n,r,e){return"Country Of Origin"===t[n]&&r.item.country[e]}(t,n,c,r)?c.item.country[r]:r}(r,n,e,o,a,i,t,c):"PUBLIC"!==t.value&&(i[t.path]=t.value)})}function l(t,n,r,e,a,i,c){const u=t.find(t=>t.path===n[r]);if(u&&u.defaultValue)e[n[r]]=u.defaultValue;else if(u.disabled)if(u.disabled&&o.includes(u.name)){const t=((t,n,r)=>t.name.includes("Item")?r.item.str+""+String(r.item.counter+n).padStart(5,"0"):t.name.includes("Party")?r.contact.str+"-"+String(r.contact.counter+n).padStart(8,"0"):t.name.includes("Location")?r.location.str+"-"+String(r.location.counter+n).padStart(8,"0"):t.name.includes("Transaction ID")?r.transaction.str+"-"+String(r.transaction.counter+n).padStart(8,"0"):t.name.includes("Line ID")?r.transactionLine.str+"-"+String(r.transactionLine.counter+n).padStart(8,"0"):void 0)(u,i+1,c);n[r].forEach((n,r)=>{""===n.value&&(e[n.path]=t)})}else a.error.push(`${u.displayText} is missing at row  ${i}`)}function f(t,n,r,e){return`${t} value for ${n[r]} is invalid at row  ${e+1}`}function d(t){if(!String(t).match(/^\d{4}-\d{2}-\d{2}$/))return!1;const n=new Date(t),r=n.getTime();return!(!r&&0!==r)&&n.toISOString().slice(0,10)===t}function p(t){for(const n in t)if(t.hasOwnProperty(n))return!1;return!0}addEventListener("message",t=>{return void 0,void 0,r=function*(){const{fileData:n,dragdropList:r,containLines:o,parentGidIdentifierPathString:c,lineIdentifierPathString:f,validationData:d}=t.data;console.log("worker input",t.data);const p=((t,n,r,o,c,f)=>{const d=f.autoGen,p=[],y=t[0],h=function(t,n){return Array.from(new Set(t[0].concat(n.filter(t=>e.find(n=>t.name.includes(n))||t.disabled).map(t=>t.displayText))))}(t,n);console.log("dragdropList:",n);const m=t.slice(1,t.length),g={data:[],error:[],csvHeader:[],csvHeaderAll:[],csvRow:[],csvRowAll:[]};if(!m.length)return function(t,n){return t.error.push("csv must contain data"),t.csvHeader=n,t}(g,y);if(function(t,n,r,e){for(let o=0;o<t.length;o++){const a=t[o],i=n.findIndex(t=>t.displayText===a);i>-1?r.push(n[i].path):e.error.push(`Column ${a} not allowed`)}}(h,n,p,g),g.error.length)return function(t,n,r){return t.csvHeader=n,t.csvRow=r,t}(g,y,m);const v=function(t,n,r,e,o,a,i){const c=[];for(let f=0;f<t.length;f++){const d={};for(let c=0;c<n.length;c++){const p=t[f][c];p&&r[c].length>1?s(r,c,n,p,e,f,d,a):p?u(n,c,a,p,e,f,d,r):l(o,r,c,d,e,f,i)}c.push(d)}return c}(m,h,p,g,n,f,d);return g.error.length?function(t,n,r){return t.csvHeader=n,t.csvRow=r,t}(g,y,m):(function(t,n,r,e,o,c,u){var s;(s=n).sort((t,n)=>t-n),console.log(s),s.forEach((t,n)=>{t=String(t).slice(7)}),n=s,t&&n.length>1?function(t,n,r,e){let o=0,c=0;for(;c<t.length;)a(t[o],t[c],n,r)?(e.data.push(i(r,o,t[o],t[c])),c++):(e.data.push(t[c]),o=c,c++)}(n,r,e,o):o.data=n,o.csvHeader=c,o.csvRow=u}(r,v,o,c,g,y,m),g.csvHeaderAll=v.map(t=>Object.keys(t)),g.csvRowAll=v.map(t=>Object.values(t)),g)})(n,r,o,c,f,d);console.log("csvDataToObject:",p),postMessage({result:p.data,error:p.error,csvHeader:p.csvHeader,csvHeaderAll:p.csvHeaderAll,csvRow:p.csvRow,csvRowAll:p.csvRowAll})},new((n=void 0)||(n=Promise))((function(t,e){function o(t){try{i(r.next(t))}catch(n){e(n)}}function a(t){try{i(r.throw(t))}catch(n){e(n)}}function i(r){var e;r.done?t(r.value):(e=r.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}i((r=r.apply(void 0,[])).next())}));var n,r})}});