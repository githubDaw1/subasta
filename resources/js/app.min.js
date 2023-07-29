/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});

/**
 * @popperjs/core v2.11.6 - MIT License
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var u=(n(e)?t(e):window).visualViewport,l=!c()&&i,d=(a.left+(l&&u?u.offsetLeft:0))/f,h=(a.top+(l&&u?u.offsetTop:0))/p,m=a.width/f,v=a.height/p;return{width:m,height:v,top:h,right:d+m,bottom:h+v,left:d,x:d,y:h}}function u(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return t(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),m=d(n),y=p(e,c,o),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==l(n)||v(m))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:u(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):m&&(b.x=h(m))),{x:y.left+g.scrollLeft-b.x,y:y.top+g.scrollTop-b.y,width:y.width,height:y.height}}function g(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function w(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:r(e)&&v(e)?e:w(b(e))}function x(e,n){var r;void 0===n&&(n=[]);var o=w(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(x(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return r(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var n=t(e),i=j(e);i&&O(i)&&"static"===m(i).position;)i=j(i);return i&&("html"===l(i)||"body"===l(i)&&"static"===m(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&"fixed"===m(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(l(n))<0;){var i=m(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var D="top",A="bottom",L="right",P="left",M="auto",k=[D,A,L,P],W="start",B="end",H="viewport",T="popper",R=k.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),S=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e){return e.split("-")[0]}function N(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function I(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function _(e,r,o){return r===H?I(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var u=c();(u||!u&&"fixed"===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+h(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):I(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function F(e,t,o,s){var f="clippingParents"===t?function(e){var t=x(b(e)),o=["absolute","fixed"].indexOf(m(e).position)>=0&&r(e)?E(e):e;return n(o)?t.filter((function(e){return n(e)&&N(e,o)&&"body"!==l(e)})):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],u=c.reduce((function(t,n){var r=_(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),_(e,p,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?C(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?"clippingParents":f,u=r.rootBoundary,l=void 0===u?H:u,h=r.elementContext,m=void 0===h?T:h,v=r.altBoundary,y=void 0!==v&&v,g=r.padding,b=void 0===g?0:g,w=Y("number"!=typeof b?b:G(b,k)),x=m===T?"reference":T,O=e.rects.popper,j=e.elements[y?x:m],E=F(n(j)?j:j.contextElement||d(e.elements.popper),c,l,s),P=p(e.elements.reference),M=X({reference:P,element:O,strategy:"absolute",placement:i}),W=I(Object.assign({},O,M)),B=m===T?W:P,R={top:E.top-B.top+w.top,bottom:B.bottom-E.bottom+w.bottom,left:E.left-B.left+w.left,right:B.right-E.right+w.right},S=e.modifiersData.offset;if(m===T&&S){var V=S[i];Object.keys(R).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";R[e]+=V[n]*t}))}return R}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?K:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(t)};var s,p,d=function(e){var t=q(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(Q(t,n)){f.rects={reference:y(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&c.addEventListener("resize",r.update,$),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&c.removeEventListener("resize",r.update,$)}},data:{}};var te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,w="function"==typeof l?l({x:y,y:b}):{x:y,y:b};y=w.x,b=w.y;var x=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=P,M=D,k=window;if(u){var W=E(r),H="clientHeight",T="clientWidth";if(W===t(r)&&"static"!==m(W=d(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),W=W,i===D||(i===P||i===L)&&a===B)M=A,b-=(h&&W===k&&k.visualViewport?k.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===P||(i===D||i===A)&&a===B)j=L,y-=(h&&W===k&&k.visualViewport?k.visualViewport.width:W[T])-o.width,y*=p?1:-1}var R,S=Object.assign({position:c},u&&ne),V=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:s(t*r)/r||0,y:s(n*r)/r||0}}({x:y,y:b}):{x:y,y:b};return y=V.x,b=V.y,p?Object.assign({},S,((R={})[M]=O?"0":"",R[j]=x?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=O?b+"px":"",n[j]=x?y+"px":"",n.transform="",n))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:C(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ie={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&l(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=C(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,p=U(r),u=p?s?R:R.filter((function(e){return U(e)===p})):k,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[C(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=C(v),g=f||(y===v||!h?[fe(v)]:function(e){if(C(e)===M)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(C(n)===M?ue(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var B=b[k],H=C(B),T=U(B)===W,R=[D,A].indexOf(H)>=0,S=R?"width":"height",V=J(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?T?L:P:T?A:D;w[S]>x[S]&&(q=fe(q));var N=fe(q),I=[];if(i&&I.push(V[H]<=0),s&&I.push(V[q]<=0,V[N]<=0),I.every((function(e){return e}))){E=B,j=!1;break}O.set(B,I)}if(j)for(var _=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},F=h?3:1;F>0;F--){if("break"===_(F))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function de(e,t,n){return i(e,a(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=J(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),w=C(t.placement),x=U(t.placement),O=!x,j=z(w),M="x"===j?"y":"x",k=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(s){var q,N="y"===j?D:P,I="y"===j?A:L,_="y"===j?"height":"width",F=k[j],X=F+b[N],Y=F-b[I],G=m?-H[_]/2:0,K=x===W?B[_]:H[_],Q=x===W?-H[_]:-B[_],Z=t.elements.arrow,$=m&&Z?g(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[N],ne=ee[I],re=de(0,B[_],$[_]),oe=O?B[_]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=O?-B[_]/2+G+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&E(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(q=null==S?void 0:S[j])?q:0,ce=F+ie-fe,pe=de(m?a(X,F+oe-fe-se):X,F,m?i(Y,ce):Y);k[j]=pe,V[j]=pe-F}if(c){var ue,le="x"===j?D:P,he="x"===j?A:L,me=k[M],ve="y"===M?"height":"width",ye=me+b[le],ge=me-b[he],be=-1!==[D,P].indexOf(w),we=null!=(ue=null==S?void 0:S[M])?ue:0,xe=be?ye:me-B[ve]-H[ve]-we+R.altAxis,Oe=be?me+B[ve]+H[ve]-we-R.altAxis:ge,je=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(xe,me,Oe):de(m?xe:ye,me,m?Oe:ge);k[M]=je,V[M]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=C(n.placement),f=z(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,n),u=g(i),l="y"===f?D:P,d="y"===f?A:L,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,w=p[l],x=y-u[c]-p[d],O=y/2-u[c]/2+b,j=de(w,O,x),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&N(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[D,L,A,P].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ye(f),u=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},be=Z({defaultModifiers:[ee,te,oe,ie]}),we=[ee,te,oe,ie,ae,le,he,me,ge],xe=Z({defaultModifiers:we});e.applyStyles=ie,e.arrow=me,e.computeStyles=oe,e.createPopper=xe,e.createPopperLite=be,e.defaultModifiers=we,e.detectOverflow=J,e.eventListeners=ee,e.flip=le,e.hide=ge,e.offset=ae,e.popperGenerator=Z,e.popperOffsets=te,e.preventOverflow=he,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict";function e(t){if(t&&t.__esModule)return t;const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}const i=e(t),s="transitionend",n=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},o=t=>{const e=n(t);return e&&document.querySelector(e)?e:null},r=t=>{const e=n(t);return e?document.querySelector(e):null},a=t=>{t.dispatchEvent(new Event(s))},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),u=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},g=t=>{t.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,p=[],m=()=>"rtl"===document.documentElement.dir,b=t=>{var e;e=()=>{const e=f();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}},"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of p)t()})),p.push(e)):e()},v=t=>{"function"==typeof t&&t()},y=(t,e,i=!0)=>{if(!i)return void v(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let o=!1;const r=({target:i})=>{i===e&&(o=!0,e.removeEventListener(s,r),v(t))};e.addEventListener(s,r),setTimeout((()=>{o||a(e)}),n)},w=(t,e,i,s)=>{const n=t.length;let o=t.indexOf(e);return-1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},A=/[^.]*(?=\..*)\.|.*/,E=/\..*/,C=/::\d+$/,T={};let k=1;const L={mouseenter:"mouseover",mouseleave:"mouseout"},O=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function I(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function S(t){const e=I(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function D(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function N(t,e,i){const s="string"==typeof e,n=s?i:e||i;let o=j(t);return O.has(o)||(o=t),[s,n,o]}function P(t,e,i,s,n){if("string"!=typeof e||!t)return;let[o,r,a]=N(e,i,s);if(e in L){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=S(t),c=l[a]||(l[a]={}),h=D(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=I(r,e.replace(A,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return F(n,{delegateTarget:r}),s.oneOff&&$.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return F(s,{delegateTarget:t}),i.oneOff&&$.off(t,s.type,e),e.apply(t,[s])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function x(t,e,i,s,n){const o=D(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function M(t,e,i,s){const n=e[i]||{};for(const o of Object.keys(n))if(o.includes(s)){const s=n[o];x(t,e,i,s.callable,s.delegationSelector)}}function j(t){return t=t.replace(E,""),L[t]||t}const $={on(t,e,i,s){P(t,e,i,s,!1)},one(t,e,i,s){P(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=N(e,i,s),a=r!==e,l=S(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))M(t,l,i,e.slice(1));for(const i of Object.keys(c)){const s=i.replace(C,"");if(!a||e.includes(s)){const e=c[i];x(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;x(t,l,r,o,n?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=f();let n=null,o=!0,r=!0,a=!1;e!==j(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=F(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}};function F(t,e){for(const[i,s]of Object.entries(e||{}))try{t[i]=s}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>s})}return t}const z=new Map,H={set(t,e,i){z.has(t)||z.set(t,new Map);const s=z.get(t);s.has(e)||0===s.size?s.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>z.has(t)&&z.get(t).get(e)||null,remove(t,e){if(!z.has(t))return;const i=z.get(t);i.delete(e),0===i.size&&z.delete(t)}};function q(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function B(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const W={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${B(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${B(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const s of i){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=q(t.dataset[s])}return e},getDataAttribute:(t,e)=>q(t.getAttribute(`data-bs-${B(e)}`))};class R{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=l(e)?W.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...l(e)?W.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const s of Object.keys(e)){const n=e[s],o=t[s],r=l(o)?"element":null==(i=o)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(n).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)}var i}}class V extends R{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),$.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){y(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const K=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;$.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),d(this))return;const n=r(this)||this.closest(`.${s}`);t.getOrCreateInstance(n)[e]()}))};class Q extends V{static get NAME(){return"alert"}close(){if($.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),$.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}K(Q,"close"),b(Q);const X='[data-bs-toggle="button"]';class Y extends V{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}$.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),b(Y);const U={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let s=t.parentNode.closest(e);for(;s;)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!d(t)&&h(t)))}},G={endCallback:null,leftCallback:null,rightCallback:null},J={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Z extends R{constructor(t,e){super(),this._element=t,t&&Z.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return G}static get DefaultType(){return J}static get NAME(){return"swipe"}dispose(){$.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&v(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?($.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),$.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):($.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),$.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),$.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const tt="next",et="prev",it="left",st="right",nt="slid.bs.carousel",ot="carousel",rt="active",at={ArrowLeft:st,ArrowRight:it},lt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ct={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ht extends V{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=U.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===ot&&this.cycle()}static get Default(){return lt}static get DefaultType(){return ct}static get NAME(){return"carousel"}next(){this._slide(tt)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(et)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?$.one(this._element,nt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void $.one(this._element,nt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?tt:et;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&$.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&($.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),$.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&Z.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of U.find(".carousel-item img",this._element))$.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(it)),rightCallback:()=>this._slide(this._directionToOrder(st)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Z(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=at[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=U.findOne(".active",this._indicatorsElement);e.classList.remove(rt),e.removeAttribute("aria-current");const i=U.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(rt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===tt,n=e||w(this._getItems(),i,s,this._config.wrap);if(n===i)return;const o=this._getItemIndex(n),r=e=>$.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!n)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n;const l=s?"carousel-item-start":"carousel-item-end",c=s?"carousel-item-next":"carousel-item-prev";n.classList.add(c),g(n),i.classList.add(l),n.classList.add(l),this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(rt),i.classList.remove(rt,c,l),this._isSliding=!1,r(nt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return U.findOne(".active.carousel-item",this._element)}_getItems(){return U.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return m()?t===it?et:tt:t===it?tt:et}_orderToDirection(t){return m()?t===et?it:st:t===et?st:it}static jQueryInterface(t){return this.each((function(){const e=ht.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}$.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=r(this);if(!e||!e.classList.contains(ot))return;t.preventDefault();const i=ht.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===W.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),$.on(window,"load.bs.carousel.data-api",(()=>{const t=U.find('[data-bs-ride="carousel"]');for(const e of t)ht.getOrCreateInstance(e)})),b(ht);const dt="show",ut="collapse",_t="collapsing",gt='[data-bs-toggle="collapse"]',ft={parent:null,toggle:!0},pt={parent:"(null|element)",toggle:"boolean"};class mt extends V{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=U.find(gt);for(const t of i){const e=o(t),i=U.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ft}static get DefaultType(){return pt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>mt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if($.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ut),this._element.classList.add(_t),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(_t),this._element.classList.add(ut,dt),this._element.style[e]="",$.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if($.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(_t),this._element.classList.remove(ut,dt);for(const t of this._triggerArray){const e=r(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(_t),this._element.classList.add(ut),$.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(dt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(gt);for(const e of t){const t=r(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=U.find(":scope .collapse .collapse",this._config.parent);return U.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=mt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}$.on(document,"click.bs.collapse.data-api",gt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=o(this),i=U.find(e);for(const t of i)mt.getOrCreateInstance(t,{toggle:!1}).toggle()})),b(mt);const bt="dropdown",vt="ArrowUp",yt="ArrowDown",wt="click.bs.dropdown.data-api",At="keydown.bs.dropdown.data-api",Et="show",Ct='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Tt=`${Ct}.show`,kt=".dropdown-menu",Lt=m()?"top-end":"top-start",Ot=m()?"top-start":"top-end",It=m()?"bottom-end":"bottom-start",St=m()?"bottom-start":"bottom-end",Dt=m()?"left-start":"right-start",Nt=m()?"right-start":"left-start",Pt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},xt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Mt extends V{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=U.next(this._element,kt)[0]||U.prev(this._element,kt)[0]||U.findOne(kt,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Pt}static get DefaultType(){return xt}static get NAME(){return bt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!$.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))$.on(t,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Et),this._element.classList.add(Et),$.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(d(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!$.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))$.off(t,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(Et),this._element.classList.remove(Et),this._element.setAttribute("aria-expanded","false"),W.removeDataAttribute(this._menu,"popper"),$.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=i.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Et)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Dt;if(t.classList.contains("dropstart"))return Nt;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Ot:Lt:e?St:It}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(W.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>h(t)));i.length&&w(i,e,t===yt,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Mt.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=U.find(Tt);for(const i of e){const e=Mt.getInstance(i);if(!e||!1===e._config.autoClose)continue;const s=t.composedPath(),n=s.includes(e._menu);if(s.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,s=[vt,yt].includes(t.key);if(!s&&!i)return;if(e&&!i)return;t.preventDefault();const n=this.matches(Ct)?this:U.prev(this,Ct)[0]||U.next(this,Ct)[0]||U.findOne(Ct,t.delegateTarget.parentNode),o=Mt.getOrCreateInstance(n);if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}$.on(document,At,Ct,Mt.dataApiKeydownHandler),$.on(document,At,kt,Mt.dataApiKeydownHandler),$.on(document,wt,Mt.clearMenus),$.on(document,"keyup.bs.dropdown.data-api",Mt.clearMenus),$.on(document,wt,Ct,(function(t){t.preventDefault(),Mt.getOrCreateInstance(this).toggle()})),b(Mt);const jt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",$t=".sticky-top",Ft="padding-right",zt="margin-right";class Ht{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ft,(e=>e+t)),this._setElementAttributes(jt,Ft,(e=>e+t)),this._setElementAttributes($t,zt,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ft),this._resetElementAttributes(jt,Ft),this._resetElementAttributes($t,zt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&W.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=W.getDataAttribute(t,e);null!==i?(W.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(l(t))e(t);else for(const i of U.find(t,this._element))e(i)}}const qt="show",Bt="mousedown.bs.backdrop",Wt={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Rt={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Vt extends R{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Wt}static get DefaultType(){return Rt}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void v(t);this._append();const e=this._getElement();this._config.isAnimated&&g(e),e.classList.add(qt),this._emulateAnimation((()=>{v(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(qt),this._emulateAnimation((()=>{this.dispose(),v(t)}))):v(t)}dispose(){this._isAppended&&($.off(this._element,Bt),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),$.on(t,Bt,(()=>{v(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){y(t,this._getElement(),this._config.isAnimated)}}const Kt=".bs.focustrap",Qt="backward",Xt={autofocus:!0,trapElement:null},Yt={autofocus:"boolean",trapElement:"element"};class Ut extends R{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Xt}static get DefaultType(){return Yt}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),$.off(document,Kt),$.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),$.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,$.off(document,Kt))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=U.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===Qt?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Qt:"forward")}}const Gt="hidden.bs.modal",Jt="show.bs.modal",Zt="modal-open",te="show",ee="modal-static",ie={backdrop:!0,focus:!0,keyboard:!0},se={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ne extends V{constructor(t,e){super(t,e),this._dialog=U.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ht,this._addEventListeners()}static get Default(){return ie}static get DefaultType(){return se}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||$.trigger(this._element,Jt,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Zt),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&($.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(te),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])$.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Vt({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ut({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=U.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),g(this._element),this._element.classList.add(te),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,$.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){$.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),$.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),$.on(this._element,"mousedown.dismiss.bs.modal",(t=>{$.one(this._element,"click.dismiss.bs.modal",(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Zt),this._resetAdjustments(),this._scrollBar.reset(),$.trigger(this._element,Gt)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if($.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(ee)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ee),this._queueCallback((()=>{this._element.classList.remove(ee),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=m()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=m()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}$.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=r(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),$.one(e,Jt,(t=>{t.defaultPrevented||$.one(e,Gt,(()=>{h(this)&&this.focus()}))}));const i=U.findOne(".modal.show");i&&ne.getInstance(i).hide(),ne.getOrCreateInstance(e).toggle(this)})),K(ne),b(ne);const oe="show",re="showing",ae="hiding",le=".offcanvas.show",ce="hidePrevented.bs.offcanvas",he="hidden.bs.offcanvas",de={backdrop:!0,keyboard:!0,scroll:!1},ue={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class _e extends V{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return de}static get DefaultType(){return ue}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||$.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Ht).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(re),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(oe),this._element.classList.remove(re),$.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&($.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ae),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(oe,ae),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Ht).reset(),$.trigger(this._element,he)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Vt({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():$.trigger(this._element,ce)}:null})}_initializeFocusTrap(){return new Ut({trapElement:this._element})}_addEventListeners(){$.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():$.trigger(this._element,ce))}))}static jQueryInterface(t){return this.each((function(){const e=_e.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}$.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=r(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;$.one(e,he,(()=>{h(this)&&this.focus()}));const i=U.findOne(le);i&&i!==e&&_e.getInstance(i).hide(),_e.getOrCreateInstance(e).toggle(this)})),$.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of U.find(le))_e.getOrCreateInstance(t).show()})),$.on(window,"resize.bs.offcanvas",(()=>{for(const t of U.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&_e.getOrCreateInstance(t).hide()})),K(_e),b(_e);const ge=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),fe=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,pe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,me=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!ge.has(i)||Boolean(fe.test(t.nodeValue)||pe.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},be={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ve={allowList:be,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ye={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},we={entry:"(string|element|function|null)",selector:"(string|element)"};class Ae extends R{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return ve}static get DefaultType(){return ye}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},we)}_setContent(t,e,i){const s=U.findOne(i,t);s&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"));for(const t of n){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const s=[].concat(...t.attributes),n=[].concat(e["*"]||[],e[i]||[]);for(const e of s)me(e,n)||t.removeAttribute(e.nodeName)}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ee=new Set(["sanitize","allowList","sanitizeFn"]),Ce="fade",Te="show",ke=".modal",Le="hide.bs.modal",Oe="hover",Ie="focus",Se={AUTO:"auto",TOP:"top",RIGHT:m()?"left":"right",BOTTOM:"bottom",LEFT:m()?"right":"left"},De={allowList:be,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ne={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Pe extends V{constructor(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return De}static get DefaultType(){return Ne}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),$.off(this._element.closest(ke),Le,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=$.trigger(this._element,this.constructor.eventName("show")),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),$.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(Te),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))$.on(t,"mouseover",_);this._queueCallback((()=>{$.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!$.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Te),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))$.off(t,"mouseover",_);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),$.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ce,Te),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ce),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ae({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ce)}_isShown(){return this.tip&&this.tip.classList.contains(Te)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,s=Se[e.toUpperCase()];return i.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)$.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===Oe?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===Oe?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");$.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?Ie:Oe]=!0,e._enter()})),$.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?Ie:Oe]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},$.on(this._element.closest(ke),Le,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=W.getDataAttributes(this._element);for(const t of Object.keys(e))Ee.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=Pe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(Pe);const xe={...Pe.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Me={...Pe.DefaultType,content:"(null|string|element|function)"};class je extends Pe{static get Default(){return xe}static get DefaultType(){return Me}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(je);const $e="click.bs.scrollspy",Fe="active",ze="[href]",He={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},qe={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Be extends V{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return He}static get DefaultType(){return qe}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&($.off(this._config.target,$e),$.on(this._config.target,$e,ze,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:s,behavior:"smooth"});i.scrollTop=s}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&t){if(i(o),!s)return}else n||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=U.find(ze,this._config.target);for(const e of t){if(!e.hash||d(e))continue;const t=U.findOne(e.hash,this._element);h(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Fe),this._activateParents(t),$.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))U.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Fe);else for(const e of U.parents(t,".nav, .list-group"))for(const t of U.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(Fe)}_clearActiveClass(t){t.classList.remove(Fe);const e=U.find("[href].active",t);for(const t of e)t.classList.remove(Fe)}static jQueryInterface(t){return this.each((function(){const e=Be.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}$.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of U.find('[data-bs-spy="scroll"]'))Be.getOrCreateInstance(t)})),b(Be);const We="ArrowLeft",Re="ArrowRight",Ve="ArrowUp",Ke="ArrowDown",Qe="active",Xe="fade",Ye="show",Ue='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ge=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ue}`;class Je extends V{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),$.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?$.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;$.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Qe),this._activate(r(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),$.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Ye)}),t,t.classList.contains(Xe)))}_deactivate(t,e){t&&(t.classList.remove(Qe),t.blur(),this._deactivate(r(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),$.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Ye)}),t,t.classList.contains(Xe)))}_keydown(t){if(![We,Re,Ve,Ke].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[Re,Ke].includes(t.key),i=w(this._getChildren().filter((t=>!d(t))),t.target,e,!0);i&&(i.focus({preventScroll:!0}),Je.getOrCreateInstance(i).show())}_getChildren(){return U.find(Ge,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=r(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const s=(t,s)=>{const n=U.findOne(t,i);n&&n.classList.toggle(s,e)};s(".dropdown-toggle",Qe),s(".dropdown-menu",Ye),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Qe)}_getInnerElement(t){return t.matches(Ge)?t:U.findOne(Ge,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Je.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}$.on(document,"click.bs.tab",Ue,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this)||Je.getOrCreateInstance(this).show()})),$.on(window,"load.bs.tab",(()=>{for(const t of U.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))Je.getOrCreateInstance(t)})),b(Je);const Ze="hide",ti="show",ei="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},si={animation:!0,autohide:!0,delay:5e3};class ni extends V{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return si}static get DefaultType(){return ii}static get NAME(){return"toast"}show(){$.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ze),g(this._element),this._element.classList.add(ti,ei),this._queueCallback((()=>{this._element.classList.remove(ei),$.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&($.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(ei),this._queueCallback((()=>{this._element.classList.add(Ze),this._element.classList.remove(ei,ti),$.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ti),super.dispose()}isShown(){return this._element.classList.contains(ti)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){$.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),$.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),$.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),$.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return K(ni),b(ni),{Alert:Q,Button:Y,Carousel:ht,Collapse:mt,Dropdown:Mt,Modal:ne,Offcanvas:_e,Popover:je,ScrollSpy:Be,Tab:Je,Toast:ni,Tooltip:Pe}}));
//# sourceMappingURL=bootstrap.min.js.map
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en});
/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
import { r as requestAnimFrame, a as resolve, e as effects, c as color, i as isObject, d as defaults, b as isArray, v as valueOrDefault, u as unlistenArrayEvents, l as listenArrayEvents, f as resolveObjectKey, g as isNumberFinite, h as defined, s as sign, j as createContext, k as isNullOrUndef, _ as _arrayUnique, t as toRadians, m as toPercentage, n as toDimension, T as TAU, o as formatNumber, p as _angleBetween, H as HALF_PI, P as PI, q as _getStartAndCountOfVisiblePoints, w as _scaleRangesChanged, x as isNumber, y as _parseObjectDataRadialScale, z as getRelativePosition, A as _rlookupByKey, B as _lookupByKey, C as _isPointInArea, D as getAngleFromPoint, E as toPadding, F as each, G as getMaximumSize, I as _getParentNode, J as readUsedSize, K as supportsEventListenerOptions, L as throttled, M as _isDomSupported, N as _factorize, O as finiteOrDefault, Q as callback, R as _addGrace, S as _limitValue, U as toDegrees, V as _measureText, W as _int16Range, X as _alignPixel, Y as clipArea, Z as renderText, $ as unclipArea, a0 as toFont, a1 as _toLeftRightCenter, a2 as _alignStartEnd, a3 as overrides, a4 as merge, a5 as _capitalize, a6 as descriptors, a7 as isFunction, a8 as _attachContext, a9 as _createResolver, aa as _descriptors, ab as mergeIf, ac as uid, ad as debounce, ae as retinaScale, af as clearCanvas, ag as setsEqual, ah as _elementsEqual, ai as _isClickEvent, aj as _isBetween, ak as _readValueToProps, al as _updateBezierControlPoints, am as _computeSegments, an as _boundSegments, ao as _steppedInterpolation, ap as _bezierInterpolation, aq as _pointInLine, ar as _steppedLineTo, as as _bezierCurveTo, at as drawPoint, au as addRoundedRectPath, av as toTRBL, aw as toTRBLCorners, ax as _boundSegment, ay as _normalizeAngle, az as getRtlAdapter, aA as overrideTextDirection, aB as _textX, aC as restoreTextDirection, aD as drawPointLegend, aE as distanceBetweenPoints, aF as noop, aG as _setMinAndMaxByKey, aH as niceNum, aI as almostWhole, aJ as almostEquals, aK as _decimalPlaces, aL as Ticks, aM as log10, aN as _longestText, aO as _filterBetween, aP as _lookup } from './chunks/helpers.segment.js';
export { aL as Ticks, d as defaults } from './chunks/helpers.segment.js';
import '@kurkle/color';

class Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
 _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart,
                initial: anims.initial,
                numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
 _refresh() {
        if (this._request) {
            return;
        }
        this._running = true;
        this._request = requestAnimFrame.call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) {
                this._refresh();
            }
        });
    }
 _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) {
                return;
            }
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) {
                        anims.duration = item._total;
                    }
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, 'progress');
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, 'complete');
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) {
            this._running = false;
        }
    }
 _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
 listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
 add(chart, items) {
        if (!items || !items.length) {
            return;
        }
        this._getAnims(chart).items.push(...items);
    }
 has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
 start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) {
            return;
        }
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) {
            return false;
        }
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) {
            return false;
        }
        return true;
    }
 stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) {
            return;
        }
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i){
            items[i].cancel();
        }
        anims.items = [];
        this._notify(chart, anims, Date.now(), 'complete');
    }
 remove(chart) {
        return this._charts.delete(chart);
    }
}
var animator = /* #__PURE__ */ new Animator();

const transparent = 'transparent';
const interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
 color (from, to, factor) {
        const c0 = color(from || transparent);
        const c1 = c0.valid && color(to || transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class Animation {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = resolve([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = resolve([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || interpolators[cfg.type || typeof from];
        this._easing = effects[cfg.easing] || effects.linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = resolve([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = resolve([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res,
                rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? 'res' : 'rej';
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++){
            promises[i][method]();
        }
    }
}

class Animations {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!isObject(config)) {
            return;
        }
        const animationOptions = Object.keys(defaults.animation);
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!isObject(cfg)) {
                return;
            }
            const resolved = {};
            for (const option of animationOptions){
                resolved[option] = cfg[option];
            }
            (isArray(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) {
                    animatedProps.set(prop, resolved);
                }
            });
        });
    }
 _animateOptions(target, values) {
        const newOptions = values.options;
        const options = resolveTargetOptions(target, newOptions);
        if (!options) {
            return [];
        }
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) {
            awaitAll(target.options.$animations, newOptions).then(()=>{
                target.options = newOptions;
            }, ()=>{
            });
        }
        return animations;
    }
 _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === '$') {
                continue;
            }
            if (prop === 'options') {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else {
                    animation.cancel();
                }
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new Animation(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
 update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            animator.add(this._chart, animations);
            return true;
        }
    }
}
function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) {
            running.push(anim.wait());
        }
    }
    return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
    if (!newOptions) {
        return;
    }
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) {
        target.options = options = Object.assign({}, options, {
            $shared: false,
            $animations: {}
        });
    }
    return options;
}

function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) {
        return false;
    }
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function toClip(value) {
    let t, r, b, l;
    if (isObject(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else {
        t = r = b = l = value;
    }
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i){
        keys.push(metasets[i].index);
    }
    return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === 'single';
    let i, ilen, datasetIndex, otherValue;
    if (value === null) {
        return;
    }
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            if (options.all) {
                continue;
            }
            break;
        }
        otherValue = stack.values[datasetIndex];
        if (isNumberFinite(otherValue) && (singleMode || value === 0 || sign(value) === sign(otherValue))) {
            value += otherValue;
        }
    }
    return value;
}
function convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            x: key,
            y: data[key]
        };
    }
    return adata;
}
function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
    const { min , max , minDefined , maxDefined  } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) {
            return meta.index;
        }
    }
    return null;
}
function updateStacks(controller, parsed) {
    const { chart , _cachedMeta: meta  } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale , vScale , index: datasetIndex  } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index , [vAxis]: value  } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
        const visualValues = stack._visualValues || (stack._visualValues = {});
        visualValues[datasetIndex] = value;
    }
}
function getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
    return createContext(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index,
        mode: 'default',
        type: 'dataset'
    });
}
function createDataContext(parent, index, element) {
    return createContext(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element,
        index,
        mode: 'default',
        type: 'data'
    });
}
function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) {
        return;
    }
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
            return;
        }
        delete stacks[axis][datasetIndex];
        if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) {
            delete stacks[axis]._visualValues[datasetIndex];
        }
    }
}
const isDirectUpdateMode = (mode)=>mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: getSortedDatasetIndices(chart, true),
        values: null
    };
class DatasetController {
 static defaults = {};
 static datasetElementType = null;
 static dataElementType = null;
 constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
         this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.datasetElementType = new.target.datasetElementType;
        this.dataElementType = new.target.dataElementType;
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = isStacked(meta.vScale, meta);
        this.addElements();
        if (this.options.fill && !this.chart.isPluginEnabled('filler')) {
            console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
        }
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) {
            clearStacks(this._cachedMeta);
        }
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === 'x' ? x : axis === 'r' ? r : y;
        const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, 'x'));
        const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, 'y'));
        const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, 'r'));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
 getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
 _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update('reset');
    }
 _destroy() {
        const meta = this._cachedMeta;
        if (this._data) {
            unlistenArrayEvents(this._data, this);
        }
        if (meta._stacked) {
            clearStacks(meta);
        }
    }
 _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if (isObject(data)) {
            this._data = convertObjectDataToArray(data);
        } else if (_data !== data) {
            if (_data) {
                unlistenArrayEvents(_data, this);
                const meta = this._cachedMeta;
                clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) {
                listenArrayEvents(data, this);
            }
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) {
            meta.dataset = new this.datasetElementType();
        }
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) {
            updateStacks(this, meta._parsed);
        }
    }
 configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
 parse(start, count) {
        const { _cachedMeta: meta , _data: data  } = this;
        const { iScale , _stacked  } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if (isArray(data[start])) {
                parsed = this.parseArrayData(meta, data, start, count);
            } else if (isObject(data[start])) {
                parsed = this.parseObjectData(meta, data, start, count);
            } else {
                parsed = this.parsePrimitiveData(meta, data, start, count);
            }
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) {
                        sorted = false;
                    }
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) {
            updateStacks(this, parsed);
        }
    }
 parsePrimitiveData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
 parseArrayData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
 parseObjectData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const { xAxisKey ='x' , yAxisKey ='y'  } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(resolveObjectKey(item, xAxisKey), index),
                y: yScale.parse(resolveObjectKey(item, yAxisKey), index)
            };
        }
        return parsed;
    }
 getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
 getDataElement(index) {
        return this._cachedMeta.data[index];
    }
 applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]._visualValues
        };
        return applyStack(stack, value, meta.index, {
            mode
        });
    }
 updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
 getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin , max: otherMax  } = getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) {
                continue;
            }
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) {
                break;
            }
        }
        if (sorted) {
            for(i = ilen - 1; i >= 0; --i){
                if (_skip()) {
                    continue;
                }
                this.updateRangeFromParsed(range, scale, parsed, stack);
                break;
            }
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if (isNumberFinite(value)) {
                values.push(value);
            }
        }
        return values;
    }
 getMaxOverflow() {
        return false;
    }
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
            value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
        };
    }
 _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || 'default');
        meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
 update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) {
            meta.dataset.draw(ctx, area, start, count);
        }
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) {
                continue;
            }
            if (element.active && drawActiveElementsOnTop) {
                active.push(element);
            } else {
                element.draw(ctx, area);
            }
        }
        for(i = 0; i < active.length; ++i){
            active[i].draw(ctx, area);
        }
    }
 getStyle(index, active) {
        const mode = active ? 'active' : 'default';
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
 getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
 resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
 resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
 _resolveElementOptions(elementType, mode = 'default', index) {
        const active = mode === 'active';
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + '-' + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && defined(index);
        if (cached) {
            return cloneIfNotShared(cached, sharing);
        }
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            'hover',
            elementType,
            ''
        ] : [
            elementType,
            ''
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys(defaults.elements[elementType]);
        const context = ()=>this.getContext(index, active, mode);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
        }
        return values;
    }
 _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) {
            return cached;
        }
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new Animations(chart, options && options.animations);
        if (options && options._cacheable) {
            cache[cacheKey] = Object.freeze(animations);
        }
        return animations;
    }
 getSharedOptions(options) {
        if (!options.$shared) {
            return;
        }
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
 includeOptions(mode, sharedOptions) {
        return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
 _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions,
            includeOptions
        };
    }
 updateElement(element, index, properties, mode) {
        if (isDirectUpdateMode(mode)) {
            Object.assign(element, properties);
        } else {
            this._resolveAnimations(index, mode).update(element, properties);
        }
    }
 updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !isDirectUpdateMode(mode)) {
            this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
        }
    }
 _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', true);
    }
 _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) {
            this._setStyle(element, undefined, 'active', false);
        }
    }
 _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) {
            this._setStyle(element, undefined, 'active', true);
        }
    }
 _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList){
            this[method](arg1, arg2);
        }
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) {
            this.parse(0, count);
        }
        if (numData > numMeta) {
            this._insertElements(numMeta, numData - numMeta, resetNewElements);
        } else if (numData < numMeta) {
            this._removeElements(numData, numMeta - numData);
        }
    }
 _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--){
                arr[i] = arr[i - count];
            }
        };
        move(data);
        for(i = start; i < end; ++i){
            data[i] = new this.dataElementType();
        }
        if (this._parsing) {
            move(meta._parsed);
        }
        this.parse(start, count);
        if (resetNewElements) {
            this.updateElements(data, start, count, 'reset');
        }
    }
    updateElements(element, start, count, mode) {}
 _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) {
                clearStacks(meta, removed);
            }
        }
        meta.data.splice(start, count);
    }
 _sync(args) {
        if (this._parsing) {
            this._syncList.push(args);
        } else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            '_insertElements',
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            '_removeElements',
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            '_removeElements',
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) {
            this._sync([
                '_removeElements',
                start,
                count
            ]);
        }
        const newCount = arguments.length - 2;
        if (newCount) {
            this._sync([
                '_insertElements',
                start,
                newCount
            ]);
        }
    }
    _onDataUnshift() {
        this._sync([
            '_insertElements',
            0,
            arguments.length
        ]);
    }
}

function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++){
            values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        }
        scale._cache.$bar = _arrayUnique(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
 function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) {
            return;
        }
        if (defined(prev)) {
            min = Math.min(min, Math.abs(curr - prev) || min);
        }
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
 function computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if (isNullOrUndef(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio,
        start: ruler.pixels[index] - size / 2
    };
}
 function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) {
        prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }
    if (next === null) {
        next = curr + curr - prev;
    }
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start
    };
}
function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart,
        barEnd,
        start: startValue,
        end: endValue,
        min,
        max
    };
}
function parseValue(entry, item, vScale, i) {
    if (isArray(entry)) {
        parseFloatBar(entry, item, vScale, i);
    } else {
        item[vScale.axis] = vScale.parse(entry, i);
    }
    return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
    if (size !== 0) {
        return sign(size);
    }
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = 'left';
        end = 'right';
    } else {
        reverse = properties.base < properties.y;
        start = 'bottom';
        end = 'top';
    }
    if (reverse) {
        top = 'end';
        bottom = 'start';
    } else {
        top = 'start';
        bottom = 'end';
    }
    return {
        start,
        end,
        reverse,
        top,
        bottom
    };
}
function setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start , end , reverse , top , bottom  } = borderProps(properties);
    if (edge === 'middle' && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) {
            edge = top;
        } else if ((stack._bottom || 0) === index) {
            edge = bottom;
        } else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = swap(edge, a, b);
        edge = startEnd(edge, b, a);
    } else {
        edge = startEnd(edge, a, b);
    }
    return edge;
}
function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
    return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, { inflateAmount  }, ratio) {
    properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class BarController extends DatasetController {
    static id = 'bar';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'base',
                    'width',
                    'height'
                ]
            }
        }
    };
 static overrides = {
        scales: {
            _index_: {
                type: 'category',
                offset: true,
                grid: {
                    offset: true
                }
            },
            _value_: {
                type: 'linear',
                beginAtZero: true
            }
        }
    };
 parsePrimitiveData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
 parseArrayData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
 parseObjectData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const { xAxisKey ='x' , yAxisKey ='y'  } = this._parsing;
        const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i);
            parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
 updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
 getMaxOverflow() {
        return 0;
    }
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale , vScale  } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
            value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === 'reset';
        const { index , _cachedMeta: { vScale  }  } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? {
                base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
            }
            const options = properties.options || bars[i].options;
            setBorderSkipped(properties, options, stack, index);
            setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
 _getStacks(last, dataIndex) {
        const { iScale  } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const skipNull = (meta)=>{
            const parsed = meta.controller.getParsed(dataIndex);
            const val = parsed && parsed[meta.vScale.axis];
            if (isNullOrUndef(val) || isNaN(val)) {
                return true;
            }
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) {
                continue;
            }
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
                stacks.push(meta.stack);
            }
            if (meta.index === last) {
                break;
            }
        }
        if (!stacks.length) {
            stacks.push(undefined);
        }
        return stacks;
    }
 _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
 _getStackIndex(datasetIndex, name, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name !== undefined ? stacks.indexOf(name) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
 _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i){
            pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        }
        const barThickness = opts.barThickness;
        const min = barThickness || computeMinSampleSize(meta);
        return {
            min,
            pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
 _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale , _stacked , index: datasetIndex  } , options: { base: baseValue , minBarLength  }  } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
                start = 0;
            }
            start += value;
        }
        const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) {
            head = vScale.getPixelForValue(start + length);
        } else {
            head = base;
        }
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) {
                base -= size / 2;
            }
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
            if (_stacked && !floating) {
                parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
            }
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size,
            base,
            head,
            center: head + size / 2
        };
    }
 _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center,
            size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i){
            if (this.getParsed(i)[vScale.axis] !== null) {
                rects[i].draw(this._ctx);
            }
        }
    }
}

class BubbleController extends DatasetController {
    static id = 'bubble';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'borderWidth',
                    'radius'
                ]
            }
        }
    };
 static overrides = {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
 parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        }
        return parsed;
    }
 parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = valueOrDefault(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
 parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
 getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i){
            max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        }
        return max > 0 && max;
    }
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale , yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale , vScale  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
                if (reset) {
                    properties.options.radius = 0;
                }
            }
            this.updateElement(point, i, properties, mode);
        }
    }
 resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) {
            values = Object.assign({}, values, {
                $shared: false
            });
        }
        const radius = values.radius;
        if (mode !== 'active') {
            values.radius = 0;
        }
        values.radius += valueOrDefault(parsed && parsed._custom, radius);
        return values;
    }
}

function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < TAU) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>_angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>_angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax(HALF_PI, startY, endY);
        const minX = calcMin(PI, startX, endX);
        const minY = calcMin(PI + HALF_PI, startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX,
        ratioY,
        offsetX,
        offsetY
    };
}
class DoughnutController extends DatasetController {
    static id = 'doughnut';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: false
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'circumference',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'startAngle',
                    'x',
                    'y',
                    'offset',
                    'borderWidth',
                    'spacing'
                ]
            }
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r'
    };
    static descriptors = {
        _scriptable: (name)=>name !== 'spacing',
        _indexable: (name)=>name !== 'spacing'
    };
 static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle , color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
 parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) {
            meta._parsed = data;
        } else {
            let getter = (i)=>+data[i];
            if (isObject(data[start])) {
                const { key ='value'  } = this._parsing;
                getter = (i)=>+resolveObjectKey(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i){
                meta._parsed[i] = getter(i);
            }
        }
    }
 _getRotation() {
        return toRadians(this.options.rotation - 90);
    }
 _getCircumference() {
        return toRadians(this.options.circumference);
    }
 _getRotationExtents() {
        let min = TAU;
        let max = -TAU;
        for(let i = 0; i < this.chart.data.datasets.length; ++i){
            if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
                const controller = this.chart.getDatasetMeta(i).controller;
                const rotation = controller._getRotation();
                const circumference = controller._getCircumference();
                min = Math.min(min, rotation);
                max = Math.max(max, rotation + circumference);
            }
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
 update(mode) {
        const chart = this.chart;
        const { chartArea  } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min(toPercentage(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference , rotation  } = this._getRotationExtents();
        const { ratioX , ratioY , offsetX , offsetY  } = getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = toDimension(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
 _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
            return 0;
        }
        return this.calculateCircumference(meta._parsed[i] * circumference / TAU);
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i){
            startAngle += this._circumference(i, reset);
        }
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle,
                endAngle: startAngle + circumference,
                circumference,
                outerRadius,
                innerRadius
            };
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
            }
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
                total += Math.abs(value);
            }
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) {
            return TAU * (Math.abs(value) / total);
        }
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = formatNumber(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i){
                if (chart.isDatasetVisible(i)) {
                    meta = chart.getDatasetMeta(i);
                    arcs = meta.data;
                    controller = meta.controller;
                    break;
                }
            }
        }
        if (!arcs) {
            return 0;
        }
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== 'inner') {
                max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
            }
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
 _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i){
            if (this.chart.isDatasetVisible(i)) {
                ringWeightOffset += this._getRingWeight(i);
            }
        }
        return ringWeightOffset;
    }
 _getRingWeight(datasetIndex) {
        return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
 _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}

class LineController extends DatasetController {
    static id = 'line';
 static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: true,
        spanGaps: false
    };
 static overrides = {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line , data: points = [] , _dataset  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if (_scaleRangesChanged(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) {
            options.borderWidth = 0;
        }
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        const end = start + count;
        const pointsCount = points.length;
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = 0; i < pointsCount; ++i){
            const point = points[i];
            const properties = directUpdate ? point : {};
            if (i < start || i >= end) {
                properties.skip = true;
                continue;
            }
            const parsed = this.getParsed(i);
            const nullData = isNullOrUndef(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            }
            if (!directUpdate) {
                this.updateElement(point, i, properties, mode);
            }
            prevParsed = parsed;
        }
    }
 getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) {
            return border;
        }
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}

class PolarAreaController extends DatasetController {
    static id = 'polarArea';
 static defaults = {
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: true
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius'
                ]
            }
        },
        indexAxis: 'r',
        startAngle: 0
    };
 static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle , color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: 'radialLinear',
                angleLines: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    circular: true
                },
                pointLabels: {
                    display: false
                },
                startAngle: 0
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = formatNumber(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    parseObjectData(meta, data, start, count) {
        return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
 getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) {
                    range.min = parsed;
                }
                if (parsed > range.max) {
                    range.max = parsed;
                }
            }
        });
        return range;
    }
 _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i){
            angle += this._computeAngle(i, mode, defaultAngle);
        }
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) {
                    outerRadius = 0;
                }
                if (animationOpts.animateRotate) {
                    startAngle = endAngle = datasetStartAngle;
                }
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) {
                count++;
            }
        });
        return count;
    }
 _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? toRadians(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}

class PieController extends DoughnutController {
    static id = 'pie';
 static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    };
}

class RadarController extends DatasetController {
    static id = 'radar';
 static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: true,
        elements: {
            line: {
                fill: 'start'
            }
        }
    };
 static overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    };
 getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: '' + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== 'resize') {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) {
                options.borderWidth = 0;
            }
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === 'reset';
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x,
                y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}

class ScatterController extends DatasetController {
    static id = 'scatter';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        showLine: false,
        fill: false
    };
 static overrides = {
        interaction: {
            mode: 'point'
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale , yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + ')'
        };
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = []  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if (_scaleRangesChanged(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            const { dataset: line , _dataset  } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options
            }, mode);
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine  } = this.options;
        if (!this.datasetElementType && showLine) {
            this.datasetElementType = this.chart.registry.getElement('line');
        }
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = isNullOrUndef(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            }
            if (!directUpdate) {
                this.updateElement(point, i, properties, mode);
            }
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
 getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i){
                max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            }
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) {
            return border;
        }
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}

var controllers = /*#__PURE__*/Object.freeze({
__proto__: null,
BarController: BarController,
BubbleController: BubbleController,
DoughnutController: DoughnutController,
LineController: LineController,
PolarAreaController: PolarAreaController,
PieController: PieController,
RadarController: RadarController,
ScatterController: ScatterController
});

/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */ function abstract() {
    throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */ class DateAdapterBase {
    /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */ static override(members) {
        Object.assign(DateAdapterBase.prototype, members);
    }
    constructor(options){
        this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {}
    formats() {
        return abstract();
    }
    parse() {
        return abstract();
    }
    format() {
        return abstract();
    }
    add() {
        return abstract();
    }
    diff() {
        return abstract();
    }
    startOf() {
        return abstract();
    }
    endOf() {
        return abstract();
    }
}
var adapters = {
    _date: DateAdapterBase
};

function binarySearch(metaset, axis, value, intersect) {
    const { controller , data , _sorted  } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
        if (!intersect) {
            return lookupMethod(data, axis, value);
        } else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === 'function' && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
 function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index , data  } = metasets[i];
        const { lo , hi  } = binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) {
                handler(element, index, j);
            }
        }
    }
}
 function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf('x') !== -1;
    const useY = axis.indexOf('y') !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
 function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) {
        return items;
    }
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !_isPointInArea(element, chart.chartArea, 0)) {
            return;
        }
        if (element.inRange(position.x, position.y, useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
        }
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
 function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle , endAngle  } = element.getProps([
            'startAngle',
            'endAngle'
        ], useFinalPosition);
        const { angle  } = getAngleFromPoint(element, {
            x: position.x,
            y: position.y
        });
        if (_angleBetween(angle, startAngle, endAngle)) {
            items.push({
                element,
                datasetIndex,
                index
            });
        }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
 function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) {
            return;
        }
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) {
            return;
        }
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element,
                    datasetIndex,
                    index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) {
            items.push({
                element,
                datasetIndex,
                index
            });
        }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
 function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) {
        return [];
    }
    return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
 function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) {
        return [];
    }
    return items;
}
 var Interaction = {
    evaluateInteractionItems,
    modes: {
 index (chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || 'x';
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) {
                return [];
            }
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) {
                    elements.push({
                        element,
                        datasetIndex: meta.index,
                        index
                    });
                }
            });
            return elements;
        },
 dataset (chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i){
                    items.push({
                        element: data[i],
                        datasetIndex,
                        index: i
                    });
                }
            }
            return items;
        },
 point (chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
 nearest (chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
 x (chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
        },
 y (chart, e, options, useFinalPosition) {
            const position = getRelativePosition(e, chart);
            return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
        }
    }
};

const STATIC_POSITIONS = [
    'left',
    'top',
    'right',
    'bottom'
];
function filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos , options: { stack , stackWeight =1  }  } = box);
        layoutBoxes.push({
            index: i,
            box,
            pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight
        });
    }
    return layoutBoxes;
}
function buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack , pos , stackWeight  } = wrap;
        if (!stack || !STATIC_POSITIONS.includes(pos)) {
            continue;
        }
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
 function setLayoutDims(layouts, params) {
    const stacks = buildStacks(layouts);
    const { vBoxMaxWidth , hBoxMaxHeight  } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize  } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
    const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
    return {
        fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: filterByPosition(layoutBoxes, 'chartArea'),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
    const { pos , box  } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!isObject(pos)) {
        if (layout.size) {
            chartArea[pos] -= layout.size;
        }
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) {
        updateMaxPadding(maxPadding, box.getPadding());
    }
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        'left',
        'right'
    ]) : marginForPositions([
        'top',
        'bottom'
    ]);
}
function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
        const { same , other  } = updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) {
            refitBoxes.push(layout);
        }
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x , y  } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if (defined(stack.start)) {
                y = stack.start;
            }
            if (box.fullSize) {
                setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            } else {
                setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            }
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height1 = chartArea.h * weight;
            const width1 = stack.size || box.width;
            if (defined(stack.start)) {
                x = stack.start;
            }
            if (box.fullSize) {
                setBoxDims(box, x, userPadding.top, width1, params.outerHeight - userPadding.bottom - userPadding.top);
            } else {
                setBoxDims(box, x, chartArea.top + stack.placed, width1, height1);
            }
            stack.start = x;
            stack.placed += height1;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
var layouts = {
 addBox (chart, item) {
        if (!chart.boxes) {
            chart.boxes = [];
        }
        item.fullSize = item.fullSize || false;
        item.position = item.position || 'top';
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
 removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) {
            chart.boxes.splice(index, 1);
        }
    },
 configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
 update (chart, width, height, minPadding) {
        if (!chart) {
            return;
        }
        const padding = toPadding(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        each(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === 'function') {
                box.beforeLayout();
            }
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding,
            availableWidth,
            availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        updateMaxPadding(maxPadding, toPadding(minPadding));
        const chartArea = Object.assign({
            maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        fitBoxes(boxes.fullSize, chartArea, params, stacks);
        fitBoxes(verticalBoxes, chartArea, params, stacks);
        if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
            fitBoxes(verticalBoxes, chartArea, params, stacks);
        }
        handleMaxPadding(chartArea);
        placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        each(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};

class BasePlatform {
 acquireContext(canvas, aspectRatio) {}
 releaseContext(context) {
        return false;
    }
 addEventListener(chart, type, listener) {}
 removeEventListener(chart, type, listener) {}
 getDevicePixelRatio() {
        return 1;
    }
 getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
 isAttached(canvas) {
        return true;
    }
 updateConfig(config) {
    }
}

class BasicPlatform extends BasePlatform {
    acquireContext(item) {
        return item && item.getContext && item.getContext('2d') || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}

const EXPANDO_KEY = '$chartjs';
 const EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
};
const isNullOrEmpty = (value)=>value === null || value === '';
 function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute('height');
    const renderWidth = canvas.getAttribute('width');
    canvas[EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || 'block';
    style.boxSizing = style.boxSizing || 'border-box';
    if (isNullOrEmpty(renderWidth)) {
        const displayWidth = readUsedSize(canvas, 'width');
        if (displayWidth !== undefined) {
            canvas.width = displayWidth;
        }
    }
    if (isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === '') {
            canvas.height = canvas.width / (aspectRatio || 2);
        } else {
            const displayHeight = readUsedSize(canvas, 'height');
            if (displayHeight !== undefined) {
                canvas.height = displayHeight;
            }
        }
    }
    return canvas;
}
const eventListenerOptions = supportsEventListenerOptions ? {
    passive: true
} : false;
function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x , y  } = getRelativePosition(event, chart);
    return {
        type,
        chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) {
            return true;
        }
    }
}
function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) {
            listener();
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) {
            listener();
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) {
        return;
    }
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) {
            resize();
        }
    });
}
function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) {
        window.addEventListener('resize', onWindowResize);
    }
    drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) {
        window.removeEventListener('resize', onWindowResize);
    }
}
function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && _getParentNode(canvas);
    if (!container) {
        return;
    }
    const resize = throttled((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) {
            listener();
        }
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) {
            return;
        }
        resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function releaseObserver(chart, type, observer) {
    if (observer) {
        observer.disconnect();
    }
    if (type === 'resize') {
        unlistenDevicePixelRatioChanges(chart);
    }
}
function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = throttled((event)=>{
        if (chart.ctx !== null) {
            listener(fromNativeEvent(event, chart));
        }
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
}
 class DomPlatform extends BasePlatform {
 acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext('2d');
        if (context && context.canvas === canvas) {
            initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
 releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[EXPANDO_KEY]) {
            return false;
        }
        const initial = canvas[EXPANDO_KEY].initial;
        [
            'height',
            'width'
        ].forEach((prop)=>{
            const value = initial[prop];
            if (isNullOrUndef(value)) {
                canvas.removeAttribute(prop);
            } else {
                canvas.setAttribute(prop, value);
            }
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[EXPANDO_KEY];
        return true;
    }
 addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: createAttachObserver,
            detach: createDetachObserver,
            resize: createResizeObserver
        };
        const handler = handlers[type] || createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
 removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) {
            return;
        }
        const handlers = {
            attach: releaseObserver,
            detach: releaseObserver,
            resize: releaseObserver
        };
        const handler = handlers[type] || removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
 getMaximumSize(canvas, width, height, aspectRatio) {
        return getMaximumSize(canvas, width, height, aspectRatio);
    }
 isAttached(canvas) {
        const container = _getParentNode(canvas);
        return !!(container && container.isConnected);
    }
}

function _detectPlatform(canvas) {
    if (!_isDomSupported() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
        return BasicPlatform;
    }
    return DomPlatform;
}

class Element {
    static defaults = {};
    static defaultRoutes = undefined;
    active = false;
    tooltipPosition(useFinalPosition) {
        const { x , y  } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    hasValue() {
        return isNumber(this.x) && isNumber(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) {
            // let's not create an object, if not needed
            return this;
        }
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}

function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++){
            skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        }
        skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
}
function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
 function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) {
        return Math.max(spacing, 1);
    }
    const factors = _factorize(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) {
            return factor;
        }
    }
    return Math.max(spacing, 1);
}
 function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++){
        if (ticks[i].major) {
            result.push(i);
        }
    }
    return result;
}
 function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++){
        if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = majorIndices[count * spacing];
        }
    }
}
 function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = valueOrDefault(majorStart, 0);
    const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++){
        if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = Math.round(start + count * spacing);
        }
    }
}
 function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) {
        return false;
    }
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }
    return diff;
}

const reverseAlign = (align)=>align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset)=>edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
const getTicksLimit = (ticksLength, maxTicksLimit)=>Math.min(maxTicksLimit || ticksLength, ticksLength);
 function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment){
        result.push(arr[Math.floor(i)]);
    }
    return result;
}
 function getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) {
            offset = Math.max(lineValue - start, end - lineValue);
        } else if (index === 0) {
            offset = (scale.getPixelForTick(1) - lineValue) / 2;
        } else {
            offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        }
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) {
            return;
        }
    }
    return lineValue;
}
 function garbageCollect(caches, length) {
    each(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i){
                delete cache.data[gc[i]];
            }
            gc.splice(0, gcLen);
        }
    });
}
 function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
 function getTitleHeight(options, fallback) {
    if (!options.display) {
        return 0;
    }
    const font = toFont(options.font, fallback);
    const padding = toPadding(options.padding);
    const lines = isArray(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
    return createContext(parent, {
        scale,
        type: 'scale'
    });
}
function createTickContext(parent, index, tick) {
    return createContext(parent, {
        tick,
        index,
        type: 'tick'
    });
}
function titleAlign(align, position, reverse) {
    let ret = _toLeftRightCenter(align);
    if (reverse && position !== 'right' || !reverse && position === 'right') {
        ret = reverseAlign(ret);
    }
    return ret;
}
function titleArgs(scale, offset, position, align) {
    const { top , left , bottom , right , chart  } = scale;
    const { chartArea , scales  } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = _alignStartEnd(align, left, right);
        if (isObject(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === 'center') {
            titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        } else {
            titleY = offsetFromEdge(scale, position, offset);
        }
        maxWidth = right - left;
    } else {
        if (isObject(position)) {
            const positionAxisID1 = Object.keys(position)[0];
            const value1 = position[positionAxisID1];
            titleX = scales[positionAxisID1].getPixelForValue(value1) - width + offset;
        } else if (position === 'center') {
            titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        } else {
            titleX = offsetFromEdge(scale, position, offset);
        }
        titleY = _alignStartEnd(align, bottom, top);
        rotation = position === 'left' ? -HALF_PI : HALF_PI;
    }
    return {
        titleX,
        titleY,
        maxWidth,
        rotation
    };
}
class Scale extends Element {
    constructor(cfg){
        super();
         this.id = cfg.id;
         this.type = cfg.type;
         this.options = undefined;
         this.ctx = cfg.ctx;
         this.chart = cfg.chart;
         this.top = undefined;
         this.bottom = undefined;
         this.left = undefined;
         this.right = undefined;
         this.width = undefined;
         this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
         this.maxWidth = undefined;
         this.maxHeight = undefined;
         this.paddingTop = undefined;
         this.paddingBottom = undefined;
         this.paddingLeft = undefined;
         this.paddingRight = undefined;
         this.axis = undefined;
         this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
         this.ticks = [];
         this._gridLineItems = null;
         this._labelItems = null;
         this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
         this._startPixel = undefined;
         this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
 init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
 parse(raw, index) {
        return raw;
    }
 getUserBounds() {
        let { _userMin , _userMax , _suggestedMin , _suggestedMax  } = this;
        _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
        _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: finiteOrDefault(_userMin, _suggestedMin),
            max: finiteOrDefault(_userMax, _suggestedMax),
            minDefined: isNumberFinite(_userMin),
            maxDefined: isNumberFinite(_userMax)
        };
    }
 getMinMax(canStack) {
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) {
            return {
                min,
                max
            };
        }
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) {
                min = Math.min(min, range.min);
            }
            if (!maxDefined) {
                max = Math.max(max, range.max);
            }
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: finiteOrDefault(min, finiteOrDefault(max, min)),
            max: finiteOrDefault(max, finiteOrDefault(min, max))
        };
    }
 getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
 getTicks() {
        return this.ticks;
    }
 getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
 getLabelItems(chartArea = this.chart.chartArea) {
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        return items;
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        callback(this.options.beforeUpdate, [
            this
        ]);
    }
 update(maxWidth, maxHeight, margins) {
        const { beginAtZero , grace , ticks: tickOpts  } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = _addGrace(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
            this.ticks = autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) {
            this._convertTicksToLabels(this.ticks);
        }
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
 configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        callback(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        callback(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        callback(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name) {
        this.chart.notifyPlugins(name, this.getContext());
        callback(this.options[name], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
    }
 buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
        callback(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
 generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = callback(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        callback(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        callback(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = toDegrees(Math.min(Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        callback(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        callback(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart , options: { ticks: tickOpts , title: titleOpts , grid: gridOpts  }  } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first , last , widest , highest  } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = toRadians(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align , padding  } , position  } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== 'top' && this.axis === 'x';
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === 'start') {
                paddingRight = last.width;
            } else if (align === 'end') {
                paddingLeft = first.width;
            } else if (align !== 'inner') {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === 'start') {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === 'end') {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
 _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        callback(this.options.afterFit, [
            this
        ]);
    }
 isHorizontal() {
        const { axis , position  } = this.options;
        return position === 'top' || position === 'bottom' || axis === 'x';
    }
 isFullSize() {
        return this.options.fullSize;
    }
 _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            if (isNullOrUndef(ticks[i].label)) {
                ticks.splice(i, 1);
                ilen--;
                i--;
            }
        }
        this.afterTickToLabelConversion();
    }
 _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) {
                ticks = sample(ticks, sampleSize);
            }
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
        }
        return labelSizes;
    }
 _computeLabelSizes(ticks, length, maxTicksLimit) {
        const { ctx , _longestTextCache: caches  } = this;
        const widths = [];
        const heights = [];
        const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; i += increment){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!isNullOrUndef(label) && !isArray(label)) {
                width = _measureText(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if (isArray(label)) {
                for(j = 0, jlen = label.length; j < jlen; ++j){
                    nestedLabel = label[j];
                    if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
                        width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
                        height += lineHeight;
                    }
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths,
            heights
        };
    }
 getLabelForValue(value) {
        return value;
    }
 getPixelForValue(value, index) {
        return NaN;
    }
 getValueForPixel(pixel) {}
 getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) {
            return null;
        }
        return this.getPixelForValue(ticks[index].value);
    }
 getPixelForDecimal(decimal) {
        if (this._reversePixels) {
            decimal = 1 - decimal;
        }
        const pixel = this._startPixel + decimal * this._length;
        return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
    }
 getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
 getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
 getBaseValue() {
        const { min , max  } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
 getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
 _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = toRadians(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
 _isVisible() {
        const display = this.options.display;
        if (display !== 'auto') {
            return !!display;
        }
        return this.getMatchingVisibleMetas().length > 0;
    }
 _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid , position , border  } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = getTickMarkLength(grid);
        const items = [];
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = borderOpts.display ? borderOpts.width : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return _alignPixel(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === 'top') {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === 'bottom') {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === 'left') {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === 'right') {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === 'x') {
            if (position === 'center') {
                borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            } else if (isObject(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === 'y') {
            if (position === 'center') {
                borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            } else if (isObject(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID1].getPixelForValue(value1));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const context = this.getContext(i);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndexBorder.dash || [];
            const borderDashOffset = optsAtIndexBorder.dashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) {
                continue;
            }
            alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
            if (isHorizontal) {
                tx1 = tx2 = x1 = x2 = alignedLineValue;
            } else {
                ty1 = ty2 = y1 = y2 = alignedLineValue;
            }
            items.push({
                tx1,
                ty1,
                tx2,
                ty2,
                x1,
                y1,
                x2,
                y2,
                width: lineWidth,
                color: lineColor,
                borderDash,
                borderDashOffset,
                tickWidth,
                tickColor,
                tickBorderDash,
                tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
 _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position , ticks: optionTicks  } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align , crossAlign , padding , mirror  } = optionTicks;
        const tl = getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -toRadians(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = 'middle';
        if (position === 'top') {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'bottom') {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'left') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === 'right') {
            const ret1 = this._getYAxisLabelAlignment(tl);
            textAlign = ret1.textAlign;
            x = ret1.x;
        } else if (axis === 'x') {
            if (position === 'center') {
                y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            } else if (isObject(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === 'y') {
            if (position === 'center') {
                x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            } else if (isObject(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                x = this.chart.scales[positionAxisID1].getPixelForValue(value1);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === 'y') {
            if (align === 'start') {
                textBaseline = 'top';
            } else if (align === 'end') {
                textBaseline = 'bottom';
            }
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = isArray(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === 'inner') {
                    if (i === ilen - 1) {
                        tickTextAlign = !this.options.reverse ? 'right' : 'left';
                    } else if (i === 0) {
                        tickTextAlign = !this.options.reverse ? 'left' : 'right';
                    } else {
                        tickTextAlign = 'center';
                    }
                }
                if (position === 'top') {
                    if (crossAlign === 'near' || rotation !== 0) {
                        textOffset = -lineCount * lineHeight + lineHeight / 2;
                    } else if (crossAlign === 'center') {
                        textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    } else {
                        textOffset = -labelSizes.highest.height + lineHeight / 2;
                    }
                } else {
                    if (crossAlign === 'near' || rotation !== 0) {
                        textOffset = lineHeight / 2;
                    } else if (crossAlign === 'center') {
                        textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    } else {
                        textOffset = labelSizes.highest.height - lineCount * lineHeight;
                    }
                }
                if (mirror) {
                    textOffset *= -1;
                }
                if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
                    x += lineHeight / 2 * Math.sin(rotation);
                }
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = toPadding(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = textOffset - labelPadding.top;
                let left = 0 - labelPadding.left;
                switch(textBaseline){
                    case 'middle':
                        top -= height / 2;
                        break;
                    case 'bottom':
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case 'center':
                        left -= width / 2;
                        break;
                    case 'right':
                        left -= width;
                        break;
                }
                backdrop = {
                    left,
                    top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                label,
                font,
                textOffset,
                options: {
                    rotation,
                    color,
                    strokeColor,
                    strokeWidth,
                    textAlign: tickTextAlign,
                    textBaseline,
                    translation: [
                        x,
                        y
                    ],
                    backdrop
                }
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position , ticks  } = this.options;
        const rotation = -toRadians(this.labelRotation);
        if (rotation) {
            return position === 'top' ? 'left' : 'right';
        }
        let align = 'center';
        if (ticks.align === 'start') {
            align = 'left';
        } else if (ticks.align === 'end') {
            align = 'right';
        } else if (ticks.align === 'inner') {
            align = 'inner';
        }
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position , ticks: { crossAlign , mirror , padding  }  } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === 'left') {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === 'near') {
                    textAlign = 'left';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === 'near') {
                    textAlign = 'right';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x = this.left;
                }
            }
        } else if (position === 'right') {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === 'near') {
                    textAlign = 'right';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === 'near') {
                    textAlign = 'left';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x = this.right;
                }
            }
        } else {
            textAlign = 'right';
        }
        return {
            textAlign,
            x
        };
    }
 _computeLabelArea() {
        if (this.options.ticks.mirror) {
            return;
        }
        const chart = this.chart;
        const position = this.options.position;
        if (position === 'left' || position === 'right') {
            return {
                top: 0,
                left: this.left,
                bottom: chart.height,
                right: this.right
            };
        }
        if (position === 'top' || position === 'bottom') {
            return {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: chart.width
            };
        }
    }
 drawBackground() {
        const { ctx , options: { backgroundColor  } , left , top , width , height  } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) {
            return 0;
        }
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
 drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) {
                return;
            }
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) {
            for(i = 0, ilen = items.length; i < ilen; ++i){
                const item = items[i];
                if (grid.drawOnChartArea) {
                    drawLine({
                        x: item.x1,
                        y: item.y1
                    }, {
                        x: item.x2,
                        y: item.y2
                    }, item);
                }
                if (grid.drawTicks) {
                    drawLine({
                        x: item.tx1,
                        y: item.ty1
                    }, {
                        x: item.tx2,
                        y: item.ty2
                    }, {
                        color: item.tickColor,
                        width: item.tickWidth,
                        borderDash: item.tickBorderDash,
                        borderDashOffset: item.tickBorderDashOffset
                    });
                }
            }
        }
    }
 drawBorder() {
        const { chart , ctx , options: { border , grid  }  } = this;
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = border.display ? borderOpts.width : 0;
        if (!axisWidth) {
            return;
        }
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.width;
        ctx.strokeStyle = borderOpts.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
 drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) {
            return;
        }
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) {
            clipArea(ctx, area);
        }
        const items = this.getLabelItems(chartArea);
        for (const item of items){
            const renderTextOptions = item.options;
            const tickFont = item.font;
            const label = item.label;
            const y = item.textOffset;
            renderText(ctx, label, 0, y, tickFont, renderTextOptions);
        }
        if (area) {
            unclipArea(ctx);
        }
    }
 drawTitle() {
        const { ctx , options: { position , title , reverse  }  } = this;
        if (!title.display) {
            return;
        }
        const font = toFont(title.font);
        const padding = toPadding(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === 'bottom' || position === 'center' || isObject(position)) {
            offset += padding.bottom;
            if (isArray(title.text)) {
                offset += font.lineHeight * (title.text.length - 1);
            }
        } else {
            offset += padding.top;
        }
        const { titleX , titleY , maxWidth , rotation  } = titleArgs(this, offset, position, align);
        renderText(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth,
            rotation,
            textAlign: titleAlign(align, position, reverse),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) {
            return;
        }
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
 _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
        const bz = valueOrDefault(opts.border && opts.border.z, 0);
        if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
            return [
                {
                    z: tz,
                    draw: (chartArea)=>{
                        this.draw(chartArea);
                    }
                }
            ];
        }
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: bz,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
 getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + 'AxisID';
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) {
                result.push(meta);
            }
        }
        return result;
    }
 _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return toFont(opts.font);
    }
 _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}

class TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
 register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if (isIChartComponent(proto)) {
            parentScope = this.register(proto);
        }
        const items = this.items;
        const id = item.id;
        const scope = this.scope + '.' + id;
        if (!id) {
            throw new Error('class does not have id: ' + item);
        }
        if (id in items) {
            return scope;
        }
        items[id] = item;
        registerDefaults(item, scope, parentScope);
        if (this.override) {
            defaults.override(item.id, item.overrides);
        }
        return scope;
    }
 get(id) {
        return this.items[id];
    }
 unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) {
            delete items[id];
        }
        if (scope && id in defaults[scope]) {
            delete defaults[scope][id];
            if (this.override) {
                delete overrides[id];
            }
        }
    }
}
function registerDefaults(item, scope, parentScope) {
    const itemDefaults = merge(Object.create(null), [
        parentScope ? defaults.get(parentScope) : {},
        defaults.get(scope),
        item.defaults
    ]);
    defaults.set(scope, itemDefaults);
    if (item.defaultRoutes) {
        routeDefaults(scope, item.defaultRoutes);
    }
    if (item.descriptors) {
        defaults.describe(scope, item.descriptors);
    }
}
function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split('.');
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join('.');
        const parts = routes[property].split('.');
        const targetName = parts.pop();
        const targetScope = parts.join('.');
        defaults.route(sourceScope, sourceName, targetScope, targetName);
    });
}
function isIChartComponent(proto) {
    return 'id' in proto && 'defaults' in proto;
}

class Registry {
    constructor(){
        this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
        this.elements = new TypedRegistry(Element, 'elements');
        this.plugins = new TypedRegistry(Object, 'plugins');
        this.scales = new TypedRegistry(Scale, 'scales');
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
 add(...args) {
        this._each('register', args);
    }
    remove(...args) {
        this._each('unregister', args);
    }
 addControllers(...args) {
        this._each('register', args, this.controllers);
    }
 addElements(...args) {
        this._each('register', args, this.elements);
    }
 addPlugins(...args) {
        this._each('register', args, this.plugins);
    }
 addScales(...args) {
        this._each('register', args, this.scales);
    }
 getController(id) {
        return this._get(id, this.controllers, 'controller');
    }
 getElement(id) {
        return this._get(id, this.elements, 'element');
    }
 getPlugin(id) {
        return this._get(id, this.plugins, 'plugin');
    }
 getScale(id) {
        return this._get(id, this.scales, 'scale');
    }
 removeControllers(...args) {
        this._each('unregister', args, this.controllers);
    }
 removeElements(...args) {
        this._each('unregister', args, this.elements);
    }
 removePlugins(...args) {
        this._each('unregister', args, this.plugins);
    }
 removeScales(...args) {
        this._each('unregister', args, this.scales);
    }
 _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
                this._exec(method, reg, arg);
            } else {
                each(arg, (item)=>{
                    const itemReg = typedRegistry || this._getRegistryForType(item);
                    this._exec(method, itemReg, item);
                });
            }
        });
    }
 _exec(method, registry, component) {
        const camelMethod = _capitalize(method);
        callback(component['before' + camelMethod], [], component);
        registry[method](component);
        callback(component['after' + camelMethod], [], component);
    }
 _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) {
                return reg;
            }
        }
        return this.plugins;
    }
 _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) {
            throw new Error('"' + id + '" is not a registered ' + type + '.');
        }
        return item;
    }
}
var registry = /* #__PURE__ */ new Registry();

class PluginService {
    constructor(){
        this._init = [];
    }
 notify(chart, hook, args, filter) {
        if (hook === 'beforeInit') {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, 'install');
        }
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === 'afterDestroy') {
            this._notify(descriptors, chart, 'stop');
            this._notify(this._init, chart, 'uninstall');
        }
        return result;
    }
 _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if (callback(method, params, plugin) === false && args.cancelable) {
                return false;
            }
        }
        return true;
    }
    invalidate() {
        if (!isNullOrUndef(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
 _descriptors(chart) {
        if (this._cache) {
            return this._cache;
        }
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = valueOrDefault(config.options && config.options.plugins, {});
        const plugins = allPlugins(config);
        return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
    }
 _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
        this._notify(diff(descriptors, previousDescriptors), chart, 'start');
    }
}
 function allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys(registry.plugins.items);
    for(let i = 0; i < keys.length; i++){
        plugins.push(registry.getPlugin(keys[i]));
    }
    const local = config.plugins || [];
    for(let i1 = 0; i1 < local.length; i1++){
        const plugin = local[i1];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins,
        localIds
    };
}
function getOpts(options, all) {
    if (!all && options === false) {
        return null;
    }
    if (options === true) {
        return {};
    }
    return options;
}
function createDescriptors(chart, { plugins , localIds  }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = getOpts(options[id], all);
        if (opts === null) {
            continue;
        }
        result.push({
            plugin,
            options: pluginOpts(chart.config, {
                plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function pluginOpts(config, { plugin , local  }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) {
        scopes.push(plugin.defaults);
    }
    return config.createResolver(scopes, context, [
        ''
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}

function getIndexAxis(type, options) {
    const datasetDefaults = defaults.datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === '_index_') {
        axis = indexAxis;
    } else if (id === '_value_') {
        axis = indexAxis === 'x' ? 'y' : 'x';
    }
    return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? '_index_' : '_value_';
}
function axisFromPosition(position) {
    if (position === 'top' || position === 'bottom') {
        return 'x';
    }
    if (position === 'left' || position === 'right') {
        return 'y';
    }
}
function determineAxis(id, scaleOptions) {
    if (id === 'x' || id === 'y' || id === 'r') {
        return id;
    }
    id = scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.length > 1 && determineAxis(id[0].toLowerCase(), scaleOptions);
    if (id) {
        return id;
    }
    throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function mergeScaleConfig(config, options) {
    const chartDefaults = overrides[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!isObject(scaleConf)) {
            return console.error(`Invalid scale configuration for scale: ${id}`);
        }
        if (scaleConf._proxy) {
            return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        }
        const axis = determineAxis(id, scaleConf);
        const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        scales[id] = mergeIf(Object.create(null), [
            {
                axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
        const datasetDefaults = overrides[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + 'AxisID'] || axis;
            scales[id] = scales[id] || Object.create(null);
            mergeIf(scales[id], [
                {
                    axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        mergeIf(scale, [
            defaults.scales[scale.type],
            defaults.scale
        ]);
    });
    return scales;
}
function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = valueOrDefault(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        keyCache.set(cacheKey, keys);
        keysCached.add(keys);
    }
    return keys;
}
const addIfFound = (set, obj, key)=>{
    const opts = resolveObjectKey(obj, key);
    if (opts !== undefined) {
        set.add(opts);
    }
};
class Config {
    constructor(config){
        this._config = initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
 datasetScopeKeys(datasetType) {
        return cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
 datasetAnimationScopeKeys(datasetType, transition) {
        return cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
 datasetElementScopeKeys(datasetType, elementType) {
        return cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ''
                ]
            ]);
    }
 pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
 _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
 getOptionScopes(mainScope, keyLists, resetCache) {
        const { options , type  } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) {
            return cached;
        }
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>addIfFound(scopes, options, key));
            keys.forEach((key)=>addIfFound(scopes, overrides[type] || {}, key));
            keys.forEach((key)=>addIfFound(scopes, defaults, key));
            keys.forEach((key)=>addIfFound(scopes, descriptors, key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) {
            array.push(Object.create(null));
        }
        if (keysCached.has(keyLists)) {
            cache.set(keyLists, array);
        }
        return array;
    }
 chartOptionScopes() {
        const { options , type  } = this;
        return [
            options,
            overrides[type] || {},
            defaults.datasets[type] || {},
            {
                type
            },
            defaults,
            descriptors
        ];
    }
 resolveNamedOptions(scopes, names, context, prefixes = [
        ''
    ]) {
        const result = {
            $shared: true
        };
        const { resolver , subPrefixes  } = getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if (needContext(resolver, names)) {
            result.$shared = false;
            context = isFunction(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = _attachContext(resolver, context, subResolver);
        }
        for (const prop of names){
            result[prop] = options[prop];
        }
        return result;
    }
 createResolver(scopes, context, prefixes = [
        ''
    ], descriptorDefaults) {
        const { resolver  } = getResolver(this._resolverCache, scopes, prefixes);
        return isObject(context) ? _attachContext(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = _createResolver(scopes, prefixes);
        cached = {
            resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes('hover'))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const hasFunction = (value)=>isObject(value) && Object.getOwnPropertyNames(value).reduce((acc, key)=>acc || isFunction(value[key]), false);
function needContext(proxy, names) {
    const { isScriptable , isIndexable  } = _descriptors(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray(value)) {
            return true;
        }
    }
    return false;
}

var version = "4.2.1";

const KNOWN_POSITIONS = [
    'top',
    'bottom',
    'left',
    'right',
    'chartArea'
];
function positionIsHorizontal(position, axis) {
    return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins('afterRender');
    callback(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    callback(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
 function getCanvas(item) {
    if (_isDomSupported() && typeof item === 'string') {
        item = document.getElementById(item);
    } else if (item && item.length) {
        item = item[0];
    }
    if (item && item.canvas) {
        item = item.canvas;
    }
    return item;
}
const instances = {};
const getChart = (key)=>{
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c)=>c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) {
                obj[intKey + move] = value;
            }
        }
    }
}
 function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === 'mouseout') {
        return null;
    }
    if (isClick) {
        return lastEvent;
    }
    return e;
}
function getDatasetArea(meta) {
    const { xScale , yScale  } = meta;
    if (xScale && yScale) {
        return {
            left: xScale.left,
            right: xScale.right,
            top: yScale.top,
            bottom: yScale.bottom
        };
    }
}
class Chart {
    static defaults = defaults;
    static instances = instances;
    static overrides = overrides;
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
        registry.add(...items);
        invalidatePlugins();
    }
    static unregister(...items) {
        registry.remove(...items);
        invalidatePlugins();
    }
    constructor(item, userConfig){
        const config = this.config = new Config(userConfig);
        const initialCanvas = getCanvas(item);
        const existingChart = getChart(initialCanvas);
        if (existingChart) {
            throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
        }
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || _detectPlatform(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = uid();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
         this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = debounce((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        animator.listen(this, 'complete', onAnimationsComplete);
        animator.listen(this, 'progress', onAnimationProgress);
        this._initialize();
        if (this.attached) {
            this.update();
        }
    }
    get aspectRatio() {
        const { options: { aspectRatio , maintainAspectRatio  } , width , height , _aspectRatio  } = this;
        if (!isNullOrUndef(aspectRatio)) {
            return aspectRatio;
        }
        if (maintainAspectRatio && _aspectRatio) {
            return _aspectRatio;
        }
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    get registry() {
        return registry;
    }
 _initialize() {
        this.notifyPlugins('beforeInit');
        if (this.options.responsive) {
            this.resize();
        } else {
            retinaScale(this, this.options.devicePixelRatio);
        }
        this.bindEvents();
        this.notifyPlugins('afterInit');
        return this;
    }
    clear() {
        clearCanvas(this.canvas, this.ctx);
        return this;
    }
    stop() {
        animator.stop(this);
        return this;
    }
 resize(width, height) {
        if (!animator.running(this)) {
            this._resize(width, height);
        } else {
            this._resizeBeforeDraw = {
                width,
                height
            };
        }
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? 'resize' : 'attach';
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!retinaScale(this, newRatio, true)) {
            return;
        }
        this.notifyPlugins('resize', {
            size: newSize
        });
        callback(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) {
                this.render();
            }
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        each(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
 buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) {
            items = items.concat(Object.keys(scaleOpts).map((id)=>{
                const scaleOptions = scaleOpts[id];
                const axis = determineAxis(id, scaleOptions);
                const isRadial = axis === 'r';
                const isHorizontal = axis === 'x';
                return {
                    options: scaleOptions,
                    dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
                    dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
                };
            }));
        }
        each(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = determineAxis(id, scaleOptions);
            const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
                scaleOptions.position = item.dposition;
            }
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) {
                scale = scales[id];
            } else {
                const scaleClass = registry.getScale(scaleType);
                scale = new scaleClass({
                    id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        each(updated, (hasUpdated, id)=>{
            if (!hasUpdated) {
                delete scales[id];
            }
        });
        each(scales, (scale)=>{
            layouts.configure(this, scale, scale.options);
            layouts.addBox(this, scale);
        });
    }
 _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i){
                this._destroyDatasetMeta(i);
            }
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
    }
 _removeUnreferencedMetasets() {
        const { _metasets: metasets , data: { datasets  }  } = this;
        if (metasets.length > datasets.length) {
            delete this._stacks;
        }
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) {
                this._destroyDatasetMeta(index);
            }
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = '' + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = registry.getController(type);
                const { datasetElementType , dataElementType  } = defaults.datasets[type];
                Object.assign(ControllerClass, {
                    dataElementType: registry.getElement(dataElementType),
                    datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
 _resetElements() {
        each(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
 reset() {
        this._resetElements();
        this.notifyPlugins('reset');
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins('beforeUpdate', {
            mode,
            cancelable: true
        }) === false) {
            return;
        }
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller  } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) {
            each(newControllers, (controller)=>{
                controller.reset();
            });
        }
        this._updateDatasets(mode);
        this.notifyPlugins('afterUpdate', {
            mode
        });
        this._layers.sort(compare2Level('z', '_idx'));
        const { _active , _lastEvent  } = this;
        if (_lastEvent) {
            this._eventHandler(_lastEvent, true);
        } else if (_active.length) {
            this._updateHoverStyles(_active, _active, true);
        }
        this.render();
    }
 _updateScales() {
        each(this.scales, (scale)=>{
            layouts.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
 _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
 _updateHiddenIndices() {
        const { _hiddenIndices  } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method , start , count  } of changes){
            const move = method === '_removeElements' ? -count : count;
            moveNumericKeys(_hiddenIndices, start, move);
        }
    }
 _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) {
            return;
        }
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + ',' + c.splice(1).join(',')));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!setsEqual(changeSet, makeSet(i))) {
                return;
            }
        }
        return Array.from(changeSet).map((c)=>c.split(',')).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
 _updateLayout(minPadding) {
        if (this.notifyPlugins('beforeLayout', {
            cancelable: true
        }) === false) {
            return;
        }
        layouts.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        each(this.boxes, (box)=>{
            if (noArea && box.position === 'chartArea') {
                return;
            }
            if (box.configure) {
                box.configure();
            }
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins('afterLayout');
    }
 _updateDatasets(mode) {
        if (this.notifyPlugins('beforeDatasetsUpdate', {
            mode,
            cancelable: true
        }) === false) {
            return;
        }
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i){
            this.getDatasetMeta(i).controller.configure();
        }
        for(let i1 = 0, ilen1 = this.data.datasets.length; i1 < ilen1; ++i1){
            this._updateDataset(i1, isFunction(mode) ? mode({
                datasetIndex: i1
            }) : mode);
        }
        this.notifyPlugins('afterDatasetsUpdate', {
            mode
        });
    }
 _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta,
            index,
            mode,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
            return;
        }
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetUpdate', args);
    }
    render() {
        if (this.notifyPlugins('beforeRender', {
            cancelable: true
        }) === false) {
            return;
        }
        if (animator.has(this)) {
            if (this.attached && !animator.running(this)) {
                animator.start(this);
            }
        } else {
            this.draw();
            onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width , height  } = this._resizeBeforeDraw;
            this._resize(width, height);
            this._resizeBeforeDraw = null;
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) {
            return;
        }
        if (this.notifyPlugins('beforeDraw', {
            cancelable: true
        }) === false) {
            return;
        }
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i){
            layers[i].draw(this.chartArea);
        }
        this._drawDatasets();
        for(; i < layers.length; ++i){
            layers[i].draw(this.chartArea);
        }
        this.notifyPlugins('afterDraw');
    }
 _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) {
                result.push(meta);
            }
        }
        return result;
    }
 getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
 _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', {
            cancelable: true
        }) === false) {
            return;
        }
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            this._drawDataset(metasets[i]);
        }
        this.notifyPlugins('afterDatasetsDraw');
    }
 _drawDataset(meta) {
        const ctx = this.ctx;
        const clip = meta._clip;
        const useClip = !clip.disabled;
        const area = getDatasetArea(meta) || this.chartArea;
        const args = {
            meta,
            index: meta.index,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
            return;
        }
        if (useClip) {
            clipArea(ctx, {
                left: clip.left === false ? 0 : area.left - clip.left,
                right: clip.right === false ? this.width : area.right + clip.right,
                top: clip.top === false ? 0 : area.top - clip.top,
                bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
            });
        }
        meta.controller.draw();
        if (useClip) {
            unclipArea(ctx);
        }
        args.cancelable = false;
        this.notifyPlugins('afterDatasetDraw', args);
    }
 isPointInArea(point) {
        return _isPointInArea(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = Interaction.modes[mode];
        if (typeof method === 'function') {
            return method(this, e, options, useFinalPosition);
        }
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = createContext(null, {
            chart: this,
            type: 'chart'
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) {
            return false;
        }
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
 _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? 'show' : 'hide';
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if (defined(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
 _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) {
            meta.controller._destroy();
        }
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        animator.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i){
            this._destroyDatasetMeta(i);
        }
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas , ctx  } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            clearCanvas(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        delete instances[this.id];
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
 bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) {
            this.bindResponsiveEvents();
        } else {
            this.attached = true;
        }
    }
 bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        each(this.options.events, (type)=>_add(type, listener));
    }
 bindResponsiveEvents() {
        if (!this._responsiveListeners) {
            this._responsiveListeners = {};
        }
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) {
                this.resize(width, height);
            }
        };
        let detached;
        const attached = ()=>{
            _remove('attach', attached);
            this.attached = true;
            this.resize();
            _add('resize', listener);
            _add('detach', detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove('resize', listener);
            this._stop();
            this._resize(0, 0);
            _add('attach', attached);
        };
        if (platform.isAttached(this.canvas)) {
            attached();
        } else {
            detached();
        }
    }
 unbindEvents() {
        each(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        each(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? 'set' : 'remove';
        let meta, item, i, ilen;
        if (mode === 'dataset') {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller['_' + prefix + 'DatasetHoverStyle']();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) {
                controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
            }
        }
    }
 getActiveElements() {
        return this._active || [];
    }
 setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) {
                throw new Error('No dataset found at index ' + datasetIndex);
            }
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !_elementsEqual(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
 notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
 isPluginEnabled(pluginId) {
        return this._plugins._cache.filter((p)=>p.plugin.id === pluginId).length === 1;
    }
 _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) {
            this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        }
        if (activated.length && hoverOptions.mode) {
            this.updateHoverStyle(activated, hoverOptions.mode, true);
        }
    }
 _eventHandler(e, replay) {
        const args = {
            event: e,
            replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
            return;
        }
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins('afterEvent', args, eventFilter);
        if (changed || args.changed) {
            this.render();
        }
        return this;
    }
 _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [] , options  } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = _isClickEvent(e);
        const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            callback(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) {
                callback(options.onClick, [
                    e,
                    active,
                    this
                ], this);
            }
        }
        const changed = !_elementsEqual(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
 _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === 'mouseout') {
            return [];
        }
        if (!inChartArea) {
            return lastActive;
        }
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
function invalidatePlugins() {
    return each(Chart.instances, (chart)=>chart._plugins.invalidate());
}

function clipArc(ctx, element, endAngle) {
    const { startAngle , pixelMargin , x , y , outerRadius , innerRadius  } = element;
    let angleMargin = pixelMargin / outerRadius;
    // Draw an inner border by clipping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
        ctx.arc(x, y, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
    }
    ctx.closePath();
    ctx.clip();
}
function toRadiusCorners(value) {
    return _readValueToProps(value, [
        'outerStart',
        'outerEnd',
        'innerStart',
        'innerEnd'
    ]);
}
/**
 * Parse border radius from the provided options
 */ function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    // Outer limits are complicated. We want to compute the available angular distance at
    // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
    // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
    //
    // If the borderRadius is large, that value can become negative.
    // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
    // we know that the thickness term will dominate and compute the limits at that point
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return _limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: _limitValue(o.innerStart, 0, innerLimit),
        innerEnd: _limitValue(o.innerEnd, 0, innerLimit)
    };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */ function rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */ function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x , y , startAngle: start , pixelMargin , innerRadius: innerR  } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        // When spacing is present, it is the same for all items
        // So we adjust the start and end angle of the arc such that
        // the distance is the same as it would be without the spacing
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / PI) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart , outerEnd , innerStart , innerEnd  } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        // The first arc segments from point 1 to point a to point 2
        const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
        ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
        // The corner segment from point 2 to point 3
        if (outerEnd > 0) {
            const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + HALF_PI);
        }
        // The line from point 3 to point 4
        const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        // The corner segment from point 4 to point 5
        if (innerEnd > 0) {
            const pCenter1 = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter1.x, pCenter1.y, innerEnd, endAngle + HALF_PI, innerEndAdjustedAngle + Math.PI);
        }
        // The inner arc from point 5 to point b to point 6
        const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
        ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
        // The corner segment from point 6 to point 7
        if (innerStart > 0) {
            const pCenter2 = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter2.x, pCenter2.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - HALF_PI);
        }
        // The line from point 7 to point 8
        const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        // The corner segment from point 8 to point 1
        if (outerStart > 0) {
            const pCenter3 = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter3.x, pCenter3.y, outerStart, startAngle - HALF_PI, outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles , startAngle , circumference  } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i){
            ctx.fill();
        }
        if (!isNaN(circumference)) {
            endAngle = startAngle + (circumference % TAU || TAU);
        }
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles , startAngle , circumference , options  } = element;
    const { borderWidth , borderJoinStyle  } = options;
    const inner = options.borderAlign === 'inner';
    if (!borderWidth) {
        return;
    }
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || 'round';
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || 'bevel';
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i){
            ctx.stroke();
        }
        if (!isNaN(circumference)) {
            endAngle = startAngle + (circumference % TAU || TAU);
        }
    }
    if (inner) {
        clipArc(ctx, element, endAngle);
    }
    if (!fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
    }
}
class ArcElement extends Element {
    static id = 'arc';
    static defaults = {
        borderAlign: 'center',
        borderColor: '#fff',
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined,
        circular: true
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        const { angle , distance  } = getAngleFromPoint(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle , endAngle , innerRadius , outerRadius , circumference  } = this.getProps([
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'circumference'
        ], useFinalPosition);
        const rAdjust = this.options.spacing / 2;
        const _circumference = valueOrDefault(circumference, endAngle - startAngle);
        const betweenAngles = _circumference >= TAU || _angleBetween(angle, startAngle, endAngle);
        const withinRadius = _isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , startAngle , endAngle , innerRadius , outerRadius  } = this.getProps([
            'x',
            'y',
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius'
        ], useFinalPosition);
        const { offset , spacing  } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options , circumference  } = this;
        const offset = (options.offset || 0) / 4;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
        this.fullCircles = circumference > TAU ? Math.floor(circumference / TAU) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
            return;
        }
        ctx.save();
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        const fix = 1 - Math.sin(Math.min(PI, circumference || 0));
        const radiusOffset = offset * fix;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        drawArc(ctx, this, radiusOffset, spacing, circular);
        drawBorder(ctx, this, radiusOffset, spacing, circular);
        ctx.restore();
    }
}

function setStyle(ctx, options, style = options) {
    ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
    ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
    if (options.stepped) {
        return _steppedLineTo;
    }
    if (options.tension || options.cubicInterpolationMode === 'monotone') {
        return _bezierCurveTo;
    }
    return lineTo;
}
function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0 , end: paramsEnd = count - 1  } = params;
    const { start: segmentStart , end: segmentEnd  } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count,
        start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
 function pathSegment(ctx, line, segment, params) {
    const { points , options  } = line;
    const { count , start , loop , ilen  } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move =true , reverse  } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) {
            continue;
        } else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else {
            lineMethod(ctx, prev, point, reverse, options.stepped);
        }
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
 function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count , start , ilen  } = pathVars(points, segment, params);
    const { move =true , reverse  } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) {
            continue;
        }
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
            } else if (y > maxY) {
                maxY = y;
            }
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
 function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
}
 function _getInterpolationMethod(options) {
    if (options.stepped) {
        return _steppedInterpolation;
    }
    if (options.tension || options.cubicInterpolationMode === 'monotone') {
        return _bezierInterpolation;
    }
    return _pointInLine;
}
function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) {
            path.closePath();
        }
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
    const { segments , options  } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments){
        setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start,
            end: start + count - 1
        })) {
            ctx.closePath();
        }
        ctx.stroke();
    }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) {
        strokePathWithCache(ctx, line, start, count);
    } else {
        strokePathDirect(ctx, line, start, count);
    }
}
class LineElement extends Element {
    static id = 'line';
 static defaults = {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: 'default',
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
    };
 static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash' && name !== 'fill'
    };
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            _updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = _computeSegments(this, this.options.segment));
    }
 first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
 last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
 interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = _boundSegments(this, {
            property,
            start: value,
            end: value
        });
        if (!segments.length) {
            return;
        }
        const result = [];
        const _interpolate = _getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start , end  } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
 pathSegment(ctx, segment, params) {
        const segmentMethod = _getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
 path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = _getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments){
            loop &= segmentMethod(ctx, this, segment, {
                start,
                end: start + count - 1
            });
        }
        return !!loop;
    }
 draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}

function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value  } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class PointElement extends Element {
    static id = 'point';
    /**
   * @type {any}
   */ static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    };
    /**
   * @type {any}
   */ static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x , y  } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange$1(this, mouseX, 'x', useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange$1(this, mouseY, 'y', useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y  } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !_isPointInArea(this, area, this.size(options) / 2)) {
            return;
        }
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        drawPoint(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        // @ts-expect-error Fallbacks should never be hit in practice
        return options.radius + options.hitRadius;
    }
}

function getBarBounds(bar, useFinalPosition) {
    const { x , y , base , width , height  } =  bar.getProps([
        'x',
        'y',
        'base',
        'width',
        'height'
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left,
        top,
        right,
        bottom
    };
}
function skipOrLimit(skip, value, min, max) {
    return skip ? 0 : _limitValue(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = toTRBL(value);
    return {
        t: skipOrLimit(skip.top, o.top, 0, maxH),
        r: skipOrLimit(skip.right, o.right, 0, maxW),
        b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius  } = bar.getProps([
        'enableBorderRadius'
    ]);
    const value = bar.options.borderRadius;
    const o = toTRBLCorners(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || isObject(value);
    return {
        topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || _isBetween(x, bounds.left, bounds.right)) && (skipY || _isBetween(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
 function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class BarElement extends Element {
    static id = 'bar';
 static defaults = {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: undefined
    };
 static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    draw(ctx) {
        const { inflateAmount , options: { borderColor , backgroundColor  }  } = this;
        const { inner , outer  } = boundingRects(this);
        const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill('evenodd');
        }
        ctx.beginPath();
        addRectPath(ctx, inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , base , horizontal  } =  this.getProps([
            'x',
            'y',
            'base',
            'horizontal'
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === 'x' ? this.width / 2 : this.height / 2;
    }
}

var elements = /*#__PURE__*/Object.freeze({
__proto__: null,
ArcElement: ArcElement,
LineElement: LineElement,
PointElement: PointElement,
BarElement: BarElement
});

const BORDER_COLORS = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
const BACKGROUND_COLORS = /* #__PURE__ */ BORDER_COLORS.map((color)=>color.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function getBorderColor(i) {
    return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
    return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function colorizeDefaultDataset(dataset, i) {
    dataset.borderColor = getBorderColor(i);
    dataset.backgroundColor = getBackgroundColor(i);
    return ++i;
}
function colorizeDoughnutDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBorderColor(i++));
    return i;
}
function colorizePolarAreaDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBackgroundColor(i++));
    return i;
}
function getColorizer(chart) {
    let i = 0;
    return (dataset, datasetIndex)=>{
        const controller = chart.getDatasetMeta(datasetIndex).controller;
        if (controller instanceof DoughnutController) {
            i = colorizeDoughnutDataset(dataset, i);
        } else if (controller instanceof PolarAreaController) {
            i = colorizePolarAreaDataset(dataset, i);
        } else if (controller) {
            i = colorizeDefaultDataset(dataset, i);
        }
    };
}
function containsColorsDefinitions(descriptors) {
    let k;
    for(k in descriptors){
        if (descriptors[k].borderColor || descriptors[k].backgroundColor) {
            return true;
        }
    }
    return false;
}
function containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
var plugin_colors = {
    id: 'colors',
    defaults: {
        enabled: true,
        forceOverride: false
    },
    beforeLayout (chart, _args, options) {
        if (!options.enabled) {
            return;
        }
        const { data: { datasets  } , options: chartOptions  } = chart.config;
        const { elements  } = chartOptions;
        if (!options.forceOverride && (containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements && containsColorsDefinitions(elements))) {
            return;
        }
        const colorizer = getColorizer(chart);
        datasets.forEach(colorizer);
    }
};

function lttbDecimation(data, start, count, availableWidth, options) {
 const samples = options.samples || availableWidth;
    if (samples >= count) {
        return data.slice(start, start + count);
    }
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx , y: pointAy  } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
                    decimated.push({
                        ...data[intermediateIndex1],
                        x: avgX
                    });
                }
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
                    decimated.push({
                        ...data[intermediateIndex2],
                        x: avgX
                    });
                }
            }
            if (i > 0 && lastIndex !== startIndex) {
                decimated.push(data[lastIndex]);
            }
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, 'data', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: data
        });
    }
}
function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        cleanDecimatedDataset(dataset);
    });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale  } = meta;
    const { min , max , minDefined , maxDefined  } = iScale.getUserBounds();
    if (minDefined) {
        start = _limitValue(_lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
    }
    if (maxDefined) {
        count = _limitValue(_lookupByKey(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    } else {
        count = pointCount - start;
    }
    return {
        start,
        count
    };
}
var plugin_decimation = {
    id: 'decimation',
    defaults: {
        algorithm: 'min-max',
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data , indexAxis  } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if (resolve([
                indexAxis,
                chart.options.indexAxis
            ]) === 'y') {
                return;
            }
            if (!meta.controller.supportsDecimation) {
                return;
            }
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
                return;
            }
            if (chart.options.parsing) {
                return;
            }
            let { start , count  } = getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                cleanDecimatedDataset(dataset);
                return;
            }
            if (isNullOrUndef(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, 'data', {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case 'lttb':
                    decimated = lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case 'min-max':
                    decimated = minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        cleanDecimatedData(chart);
    }
};

function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start , end  } = segment;
        end = _findSegmentEnd(start, end, points);
        const bounds = _getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = _boundSegments(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = _boundSegment(segment, points, subBounds);
            for (const fillSource of fillSources){
                parts.push({
                    source: fillSource,
                    target: tgt,
                    start: {
                        [property]: _getEdge(bounds, subBounds, 'start', Math.max)
                    },
                    end: {
                        [property]: _getEdge(bounds, subBounds, 'end', Math.min)
                    }
                });
            }
        }
    }
    return parts;
}
function _getBounds(property, first, last, loop) {
    if (loop) {
        return;
    }
    let start = first[property];
    let end = last[property];
    if (property === 'angle') {
        start = _normalizeAngle(start);
        end = _normalizeAngle(end);
    }
    return {
        property,
        start,
        end
    };
}
function _pointsFromSegments(boundary, line) {
    const { x =null , y =null  } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start , end  })=>{
        end = _findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y
            });
            points.push({
                x: last.x,
                y
            });
        } else if (x !== null) {
            points.push({
                x,
                y: first.y
            });
            points.push({
                x,
                y: last.y
            });
        }
    });
    return points;
}
function _findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) {
            break;
        }
    }
    return end;
}
function _getEdge(a, b, prop, fn) {
    if (a && b) {
        return fn(a[prop], b[prop]);
    }
    return a ? a[prop] : b ? b[prop] : 0;
}

function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if (isArray(boundary)) {
        _loop = true;
        points = boundary;
    } else {
        points = _pointsFromSegments(boundary, line);
    }
    return points.length ? new LineElement({
        points,
        options: {
            tension: 0
        },
        _loop,
        _fullLoop: _loop
    }) : null;
}
function _shouldApplyFill(source) {
    return source && source.fill !== false;
}

function _resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) {
        return fill;
    }
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!isNumberFinite(fill)) {
            return fill;
        }
        target = sources[fill];
        if (!target) {
            return false;
        }
        if (target.visible) {
            return fill;
        }
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
 function _decodeFill(line, index, count) {
     const fill = parseFillOption(line);
    if (isObject(fill)) {
        return isNaN(fill.value) ? false : fill;
    }
    let target = parseFloat(fill);
    if (isNumberFinite(target) && Math.floor(target) === target) {
        return decodeTargetIndex(fill[0], index, target, count);
    }
    return [
        'origin',
        'start',
        'end',
        'stack',
        'shape'
    ].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === '-' || firstCh === '+') {
        target = index + target;
    }
    if (target === index || target < 0 || target >= count) {
        return false;
    }
    return target;
}
 function _getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === 'start') {
        pixel = scale.bottom;
    } else if (fill === 'end') {
        pixel = scale.top;
    } else if (isObject(fill)) {
        pixel = scale.getPixelForValue(fill.value);
    } else if (scale.getBasePixel) {
        pixel = scale.getBasePixel();
    }
    return pixel;
}
 function _getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === 'start') {
        value = startValue;
    } else if (fill === 'end') {
        value = scale.options.reverse ? scale.min : scale.max;
    } else if (isObject(fill)) {
        value = fill.value;
    } else {
        value = scale.getBaseValue();
    }
    return value;
}
 function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = valueOrDefault(fillOption && fillOption.target, fillOption);
    if (fill === undefined) {
        fill = !!options.backgroundColor;
    }
    if (fill === false || fill === null) {
        return false;
    }
    if (fill === true) {
        return 'origin';
    }
    return fill;
}

function _buildStackLine(source) {
    const { scale , index , line  } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index);
    linesBelow.push(_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++){
            addPointsBelow(points, sourcePoints[j], linesBelow);
        }
    }
    return new LineElement({
        points,
        options: {}
    });
}
 function getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas('line');
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) {
            break;
        }
        if (!meta.hidden) {
            below.unshift(meta.dataset);
        }
    }
    return below;
}
 function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first , last , point  } = findPoint(line, sourcePoint, 'x');
        if (!point || first && last) {
            continue;
        }
        if (first) {
            postponed.unshift(point);
        } else {
            points.push(point);
            if (!last) {
                break;
            }
        }
    }
    points.push(...postponed);
}
 function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) {
        return {};
    }
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if (_isBetween(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first,
        last,
        point
    };
}

class simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x , y , radius  } = this;
        bounds = bounds || {
            start: 0,
            end: TAU
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x , y , radius  } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle
        };
    }
}

function _getTarget(source) {
    const { chart , fill , line  } = source;
    if (isNumberFinite(fill)) {
        return getLineByIndex(chart, fill);
    }
    if (fill === 'stack') {
        return _buildStackLine(source);
    }
    if (fill === 'shape') {
        return true;
    }
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) {
        return boundary;
    }
    return _createBoundaryLine(boundary, line);
}
 function getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) {
        return computeCircularBoundary(source);
    }
    return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
    const { scale ={} , fill  } = source;
    const pixel = _getTargetPixel(fill, scale);
    if (isNumberFinite(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function computeCircularBoundary(source) {
    const { scale , fill  } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i){
        target.push(scale.getPointPositionForValue(i, value));
    }
    return target;
}

function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { line , scale , axis  } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above =color , below =color  } = fillOption || {};
    if (target && line.points.length) {
        clipArea(ctx, area);
        doFill(ctx, {
            line,
            target,
            above,
            below,
            area,
            scale,
            axis
        });
        unclipArea(ctx);
    }
}
function doFill(ctx, cfg) {
    const { line , target , above , below , area , scale  } = cfg;
    const property = line._loop ? 'angle' : cfg.axis;
    ctx.save();
    if (property === 'x' && below !== above) {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
            line,
            target,
            color: above,
            scale,
            property
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
    }
    fill(ctx, {
        line,
        target,
        color: below,
        scale,
        property
    });
    ctx.restore();
}
function clipVertical(ctx, target, clipY) {
    const { segments , points  } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start , end  } = segment;
        const firstPoint = points[start];
        const lastPoint = points[_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) {
            ctx.closePath();
        } else {
            ctx.lineTo(lastPoint.x, clipY);
        }
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function fill(ctx, cfg) {
    const { line , target , property , color , scale  } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src , target: tgt , start , end  } of segments){
        const { style: { backgroundColor =color  } = {}  } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) {
                ctx.closePath();
            } else {
                interpolatedLineTo(ctx, target, end, property);
            }
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) {
                interpolatedLineTo(ctx, target, start, property);
            }
        }
        ctx.closePath();
        ctx.fill(loop ? 'evenodd' : 'nonzero');
        ctx.restore();
    }
}
function clipBounds(ctx, scale, bounds) {
    const { top , bottom  } = scale.chart.chartArea;
    const { property , start , end  } = bounds || {};
    if (property === 'x') {
        ctx.beginPath();
        ctx.rect(start, top, end - start, bottom - top);
        ctx.clip();
    }
}
function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) {
        ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
    }
}

var index = {
    id: 'filler',
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof LineElement) {
                source = {
                    visible: chart.isDatasetVisible(i),
                    index: i,
                    fill: _decodeFill(line, i, count),
                    chart,
                    axis: meta.controller.options.indexAxis,
                    scale: meta.vScale,
                    line
                };
            }
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) {
                continue;
            }
            source.fill = _resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === 'beforeDraw';
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) {
                continue;
            }
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) {
                _drawfill(chart.ctx, source, area);
            }
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== 'beforeDatasetsDraw') {
            return;
        }
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (_shouldApplyFill(source)) {
                _drawfill(chart.ctx, source, chart.chartArea);
            }
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') {
            return;
        }
        _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: 'beforeDatasetDraw'
    }
};

const getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight =fontSize , boxWidth =fontSize  } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth,
        boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
 constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
 this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = callback(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) {
            legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        }
        if (labelOpts.sort) {
            legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        }
        if (this.options.reverse) {
            legendItems.reverse();
        }
        this.legendItems = legendItems;
    }
    fit() {
        const { options , ctx  } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = toFont(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth , itemHeight  } = getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
 _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx , maxWidth , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top,
                row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
        const { ctx , maxHeight , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const { itemWidth , itemHeight  } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left,
                top: currentColHeight,
                col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) {
            return;
        }
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes , options: { align , labels: { padding  } , rtl  }  } = this;
        const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox1 of hitboxes){
                if (hitbox1.col !== col) {
                    col = hitbox1.col;
                    top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox1.top = top;
                hitbox1.left += this.left + padding;
                hitbox1.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox1.left), hitbox1.width);
                top += hitbox1.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === 'top' || this.options.position === 'bottom';
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            clipArea(ctx, this);
            this._draw();
            unclipArea(ctx);
        }
    }
 _draw() {
        const { options: opts , columnSizes , lineWidths , ctx  } = this;
        const { align , labels: labelOpts  } = opts;
        const defaultColor = defaults.color;
        const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
        const labelFont = toFont(labelOpts.font);
        const { padding  } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign('left');
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth , boxHeight , itemHeight  } = getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
                return;
            }
            ctx.save();
            const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
            ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
            ctx.lineCap = valueOrDefault(legendItem.lineCap, 'butt');
            ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
            ctx.lineJoin = valueOrDefault(legendItem.lineJoin, 'miter');
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                drawPointLegend(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = toTRBLCorners(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) {
                    addRoundedRectPath(ctx, {
                        x: xBoxLeft,
                        y: yBoxTop,
                        w: boxWidth,
                        h: boxHeight,
                        radius: borderRadius
                    });
                } else {
                    ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                }
                ctx.fill();
                if (lineWidth !== 0) {
                    ctx.stroke();
                }
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            renderText(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) {
            cursor = {
                x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
                y: this.top + padding + titleHeight,
                line: 0
            };
        } else {
            cursor = {
                x: this.left + padding,
                y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
                line: 0
            };
        }
        overrideTextDirection(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor;
            ctx.fillStyle = legendItem.fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = _textX(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) {
                cursor.x += width + padding;
            } else if (typeof legendItem.text !== 'string') {
                const fontLineHeight = labelFont.lineHeight;
                cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight);
            } else {
                cursor.y += lineHeight;
            }
        });
        restoreTextDirection(this.ctx, opts.textDirection);
    }
 drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = toFont(titleOpts.font);
        const titlePadding = toPadding(titleOpts.padding);
        if (!titleOpts.display) {
            return;
        }
        const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = _alignStartEnd(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = _alignStartEnd(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        renderText(ctx, titleOpts.text, x, y, titleFont);
    }
 _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = toFont(titleOpts.font);
        const titlePadding = toPadding(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
 _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if (_isBetween(x, this.left, this.right) && _isBetween(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if (_isBetween(x, hitBox.left, hitBox.left + hitBox.width) && _isBetween(y, hitBox.top, hitBox.top + hitBox.height)) {
                    return this.legendItems[i];
                }
            }
        }
        return null;
    }
 handleEvent(e) {
        const opts = this.options;
        if (!isListened(e.type, opts)) {
            return;
        }
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === 'mousemove' || e.type === 'mouseout') {
            const previous = this._hoveredItem;
            const sameItem = itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) {
                callback(opts.onLeave, [
                    e,
                    previous,
                    this
                ], this);
            }
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) {
                callback(opts.onHover, [
                    e,
                    hoveredItem,
                    this
                ], this);
            }
        } else if (hoveredItem) {
            callback(opts.onClick, [
                e,
                hoveredItem,
                this
            ], this);
        }
    }
}
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
        itemWidth,
        itemHeight
    };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== 'string') {
        legendItemText = legendItemText.reduce((a, b)=>a.length > b.length ? a : b);
    }
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== 'string') {
        itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    }
    return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length + 0.5 : 0;
    return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
    if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) {
        return true;
    }
    if (opts.onClick && (type === 'click' || type === 'mouseup')) {
        return true;
    }
    return false;
}
var plugin_legend = {
    id: 'legend',
 _element: Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new Legend({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, legend, options);
        layouts.addBox(chart, legend);
    },
    stop (chart) {
        layouts.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        layouts.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) {
            chart.legend.handleEvent(args.event);
        }
    },
    defaults: {
        display: true,
        position: 'top',
        align: 'center',
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle , pointStyle , textAlign , color , useBorderRadius , borderRadius  }  } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = toPadding(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: 'center',
            text: ''
        }
    },
    descriptors: {
        _scriptable: (name)=>!name.startsWith('on'),
        labels: {
            _scriptable: (name)=>![
                    'generateLabels',
                    'filter',
                    'sort'
                ].includes(name)
        }
    }
};

class Title extends Element {
 constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = isArray(opts.text) ? opts.text.length : 1;
        this._padding = toPadding(opts.padding);
        const textSize = lineCount * toFont(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) {
            this.height = textSize;
        } else {
            this.width = textSize;
        }
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === 'top' || pos === 'bottom';
    }
    _drawArgs(offset) {
        const { top , left , bottom , right , options  } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = _alignStartEnd(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === 'left') {
                titleX = left + offset;
                titleY = _alignStartEnd(align, bottom, top);
                rotation = PI * -0.5;
            } else {
                titleX = right - offset;
                titleY = _alignStartEnd(align, top, bottom);
                rotation = PI * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX,
            titleY,
            maxWidth,
            rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) {
            return;
        }
        const fontOpts = toFont(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX , titleY , maxWidth , rotation  } = this._drawArgs(offset);
        renderText(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth,
            rotation,
            textAlign: _toLeftRightCenter(opts.align),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function createTitle(chart, titleOpts) {
    const title = new Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
}
var plugin_title = {
    id: 'title',
 _element: Title,
    start (chart, _args, options) {
        createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'bold'
        },
        fullSize: true,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2000
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};

const map = new WeakMap();
var plugin_subtitle = {
    id: 'subtitle',
    start (chart, _args, options) {
        const title = new Title({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, title, options);
        layouts.addBox(chart, title);
        map.set(chart, title);
    },
    stop (chart) {
        layouts.removeBox(chart, map.get(chart));
        map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = map.get(chart);
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'normal'
        },
        fullSize: true,
        padding: 0,
        position: 'top',
        text: '',
        weight: 1500
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};

const positioners = {
 average (items) {
        if (!items.length) {
            return false;
        }
        let i, len;
        let x = 0;
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                x += pos.x;
                y += pos.y;
                ++count;
            }
        }
        return {
            x: x / count,
            y: y / count
        };
    },
 nearest (items, eventPosition) {
        if (!items.length) {
            return false;
        }
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = distanceBetweenPoints(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x,
            y
        };
    }
};
function pushOrConcat(base, toPush) {
    if (toPush) {
        if (isArray(toPush)) {
            Array.prototype.push.apply(base, toPush);
        } else {
            base.push(toPush);
        }
    }
    return base;
}
 function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
        return str.split('\n');
    }
    return str;
}
 function createTooltipItem(chart, item) {
    const { element , datasetIndex , index  } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label , value  } = controller.getLabelAndValue(index);
    return {
        chart,
        label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex,
        element
    };
}
 function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body , footer , title  } = tooltip;
    const { boxWidth , boxHeight  } = options;
    const bodyFont = toFont(options.bodyFont);
    const titleFont = toFont(options.titleFont);
    const footerFont = toFont(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = toPadding(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) {
        height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    }
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) {
        height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    }
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    each(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    each(body, (bodyItem)=>{
        each(bodyItem.before, maxLineWidth);
        each(bodyItem.lines, maxLineWidth);
        each(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    each(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width,
        height
    };
}
function determineYAlign(chart, size) {
    const { y , height  } = size;
    if (y < height / 2) {
        return 'top';
    } else if (y > chart.height - height / 2) {
        return 'bottom';
    }
    return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x , width  } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === 'left' && x + width + caret > chart.width) {
        return true;
    }
    if (xAlign === 'right' && x - width - caret < 0) {
        return true;
    }
}
function determineXAlign(chart, options, size, yAlign) {
    const { x , width  } = size;
    const { width: chartWidth , chartArea: { left , right  }  } = chart;
    let xAlign = 'center';
    if (yAlign === 'center') {
        xAlign = x <= (left + right) / 2 ? 'left' : 'right';
    } else if (x <= width / 2) {
        xAlign = 'left';
    } else if (x >= chartWidth - width / 2) {
        xAlign = 'right';
    }
    if (doesNotFitWithAlign(xAlign, chart, options, size)) {
        xAlign = 'center';
    }
    return xAlign;
}
 function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
        yAlign
    };
}
function alignX(size, xAlign) {
    let { x , width  } = size;
    if (xAlign === 'right') {
        x -= width;
    } else if (xAlign === 'center') {
        x -= width / 2;
    }
    return x;
}
function alignY(size, yAlign, paddingAndSize) {
    let { y , height  } = size;
    if (yAlign === 'top') {
        y += paddingAndSize;
    } else if (yAlign === 'bottom') {
        y -= height + paddingAndSize;
    } else {
        y -= height / 2;
    }
    return y;
}
 function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize , caretPadding , cornerRadius  } = options;
    const { xAlign , yAlign  } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft , topRight , bottomLeft , bottomRight  } = toTRBLCorners(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === 'center') {
        if (xAlign === 'left') {
            x += paddingAndSize;
        } else if (xAlign === 'right') {
            x -= paddingAndSize;
        }
    } else if (xAlign === 'left') {
        x -= Math.max(topLeft, bottomLeft) + caretSize;
    } else if (xAlign === 'right') {
        x += Math.max(topRight, bottomRight) + caretSize;
    }
    return {
        x: _limitValue(x, 0, chart.width - size.width),
        y: _limitValue(y, 0, chart.height - size.height)
    };
}
function getAlignedX(tooltip, align, options) {
    const padding = toPadding(options.padding);
    return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
 function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
    return createContext(parent, {
        tooltip,
        tooltipItems,
        type: 'tooltip'
    });
}
function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
const defaultCallbacks = {
    beforeTitle: noop,
    title (tooltipItems) {
        if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === 'dataset') {
                return item.dataset.label || '';
            } else if (item.label) {
                return item.label;
            } else if (labelCount > 0 && item.dataIndex < labelCount) {
                return labels[item.dataIndex];
            }
        }
        return '';
    },
    afterTitle: noop,
    beforeBody: noop,
    beforeLabel: noop,
    label (tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') {
            return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        }
        let label = tooltipItem.dataset.label || '';
        if (label) {
            label += ': ';
        }
        const value = tooltipItem.formattedValue;
        if (!isNullOrUndef(value)) {
            label += value;
        }
        return label;
    },
    labelColor (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
        };
    },
    labelTextColor () {
        return this.options.bodyColor;
    },
    labelPointStyle (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
        };
    },
    afterLabel: noop,
    afterBody: noop,
    beforeFooter: noop,
    footer: noop,
    afterFooter: noop
};
 function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === 'undefined') {
        return defaultCallbacks[name].call(ctx, arg);
    }
    return result;
}
class Tooltip extends Element {
 static positioners = positioners;
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
 _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) {
            return cached;
        }
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new Animations(this.chart, opts);
        if (opts._cacheable) {
            this._cachedAnimations = Object.freeze(animations);
        }
        return animations;
    }
 getContext() {
        return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks  } = options;
        const beforeTitle = invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
        const title = invokeCallbackWithFallback(callbacks, 'title', this, context);
        const afterTitle = invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeTitle));
        lines = pushOrConcat(lines, splitNewlines(title));
        lines = pushOrConcat(lines, splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
    }
    getBody(tooltipItems, options) {
        const { callbacks  } = options;
        const bodyItems = [];
        each(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = overrideCallbacks(callbacks, context);
            pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, 'beforeLabel', this, context)));
            pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, 'label', this, context));
            pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, 'afterLabel', this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
        const { callbacks  } = options;
        const beforeFooter = invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
        const footer = invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
        const afterFooter = invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeFooter));
        lines = pushOrConcat(lines, splitNewlines(footer));
        lines = pushOrConcat(lines, splitNewlines(afterFooter));
        return lines;
    }
 _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i){
            tooltipItems.push(createTooltipItem(this.chart, active[i]));
        }
        if (options.filter) {
            tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        }
        if (options.itemSort) {
            tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        }
        each(tooltipItems, (context)=>{
            const scoped = overrideCallbacks(options.callbacks, context);
            labelColors.push(invokeCallbackWithFallback(scoped, 'labelColor', this, context));
            labelPointStyles.push(invokeCallbackWithFallback(scoped, 'labelPointStyle', this, context));
            labelTextColors.push(invokeCallbackWithFallback(scoped, 'labelTextColor', this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) {
                properties = {
                    opacity: 0
                };
            }
        } else {
            const position = positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) {
            this._resolveAnimations().update(this, properties);
        }
        if (changed && options.external) {
            options.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay
            });
        }
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign , yAlign  } = this;
        const { caretSize , cornerRadius  } = options;
        const { topLeft , topRight , bottomLeft , bottomRight  } = toTRBLCorners(cornerRadius);
        const { x: ptX , y: ptY  } = tooltipPoint;
        const { width , height  } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === 'center') {
            y2 = ptY + height / 2;
            if (xAlign === 'left') {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === 'left') {
                x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            } else if (xAlign === 'right') {
                x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            } else {
                x2 = this.caretX;
            }
            if (yAlign === 'top') {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1,
            x2,
            x3,
            y1,
            y2,
            y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = 'middle';
            titleFont = toFont(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) {
                    pt.y += options.titleMarginBottom - titleSpacing;
                }
            }
        }
    }
 _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColors = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight , boxWidth , boxPadding  } = options;
        const bodyFont = toFont(options.bodyFont);
        const colorX = getAlignedX(this, 'left', options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            drawPoint(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColors.borderColor;
            ctx.fillStyle = labelColors.backgroundColor;
            drawPoint(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = isObject(labelColors.borderWidth) ? Math.max(...Object.values(labelColors.borderWidth)) : labelColors.borderWidth || 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.setLineDash(labelColors.borderDash || []);
            ctx.lineDashOffset = labelColors.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
            const borderRadius = toTRBLCorners(labelColors.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                addRoundedRectPath(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.beginPath();
                addRoundedRectPath(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body  } = this;
        const { bodySpacing , bodyAlign , displayColors , boxHeight , boxWidth , boxPadding  } = options;
        const bodyFont = toFont(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'middle';
        ctx.font = bodyFont.string;
        pt.x = getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        each(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            each(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            each(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        each(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = 'middle';
            footerFont = toFont(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign , yAlign  } = this;
        const { x , y  } = pt;
        const { width , height  } = tooltipSize;
        const { topLeft , topRight , bottomLeft , bottomRight  } = toTRBLCorners(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === 'top') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === 'center' && xAlign === 'right') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === 'bottom') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === 'center' && xAlign === 'left') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) {
            ctx.stroke();
        }
    }
 _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) {
                return;
            }
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = determineAlignment(chart, options, positionAndSize);
            const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
 _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) {
            return;
        }
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = toPadding(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            overrideTextDirection(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            restoreTextDirection(ctx, options.textDirection);
            ctx.restore();
        }
    }
 getActiveElements() {
        return this._active || [];
    }
 setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) {
                throw new Error('Cannot find a dataset at index ' + datasetIndex);
            }
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !_elementsEqual(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
 handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) {
            return false;
        }
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
 _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === 'mouseout') {
            return [];
        }
        if (!inChartArea) {
            return lastActive;
        }
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) {
            active.reverse();
        }
        return active;
    }
 _positionChanged(active, e) {
        const { caretX , caretY , options  } = this;
        const position = positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
var plugin_tooltip = {
    id: 'tooltip',
    _element: Tooltip,
    positioners,
    afterInit (chart, _args, options) {
        if (options) {
            chart.tooltip = new Tooltip({
                chart,
                options
            });
        }
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) {
            chart.tooltip.initialize(options);
        }
    },
    reset (chart, _args, options) {
        if (chart.tooltip) {
            chart.tooltip.initialize(options);
        }
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip
            };
            if (chart.notifyPlugins('beforeTooltipDraw', {
                ...args,
                cancelable: true
            }) === false) {
                return;
            }
            tooltip.draw(chart.ctx);
            chart.notifyPlugins('afterTooltipDraw', args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
                args.changed = true;
            }
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        titleFont: {
            weight: 'bold'
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: 'left',
        bodyColor: '#fff',
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: 'left',
        footerColor: '#fff',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: 'bold'
        },
        footerAlign: 'left',
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: '#fff',
        displayColors: true,
        boxPadding: 0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: 'easeOutQuart'
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'width',
                    'height',
                    'caretX',
                    'caretY'
                ]
            },
            opacity: {
                easing: 'linear',
                duration: 200
            }
        },
        callbacks: defaultCallbacks
    },
    defaultRoutes: {
        bodyFont: 'font',
        footerFont: 'font',
        titleFont: 'font'
    },
    descriptors: {
        _scriptable: (name)=>name !== 'filter' && name !== 'itemSort' && name !== 'external',
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: 'animation'
        }
    },
    additionalOptionScopes: [
        'interaction'
    ]
};

var plugins = /*#__PURE__*/Object.freeze({
__proto__: null,
Colors: plugin_colors,
Decimation: plugin_decimation,
Filler: index,
Legend: plugin_legend,
SubTitle: plugin_subtitle,
Title: plugin_title,
Tooltip: plugin_tooltip
});

const addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === 'string') {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index,
            label: raw
        });
    } else if (isNaN(raw)) {
        index = null;
    }
    return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) {
        return addIfString(labels, raw, index, addedLabels);
    }
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const validIndex = (index, max)=>index === null ? null : _limitValue(Math.round(index), 0, max);
function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
        return labels[value];
    }
    return value;
}
class CategoryScale extends Scale {
    static id = 'category';
 static defaults = {
        ticks: {
            callback: _getLabelForValue
        }
    };
    constructor(cfg){
        super(cfg);
         this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index , label  } of added){
                if (labels[index] === label) {
                    labels.splice(index, 1);
                }
            }
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if (isNullOrUndef(raw)) {
            return null;
        }
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, valueOrDefault(index, raw), this._addedLabels);
        return validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this.getMinMax(true);
        if (this.options.bounds === 'ticks') {
            if (!minDefined) {
                min = 0;
            }
            if (!maxDefined) {
                max = this.getLabels().length - 1;
            }
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++){
            ticks.push({
                value
            });
        }
        return ticks;
    }
    getLabelForValue(value) {
        return _getLabelForValue.call(this, value);
    }
 configure() {
        super.configure();
        if (!this.isHorizontal()) {
            this._reversePixels = !this._reversePixels;
        }
    }
    getPixelForValue(value) {
        if (typeof value !== 'number') {
            value = this.parse(value);
        }
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) {
            return null;
        }
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}

function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds , step , min , max , precision , count , maxTicks , maxDigits , includeBounds  } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin , max: rmax  } = dataRange;
    const minDefined = !isNullOrUndef(min);
    const maxDefined = !isNullOrUndef(max);
    const countDefined = !isNullOrUndef(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
        return [
            {
                value: rmin
            },
            {
                value: rmax
            }
        ];
    }
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) {
        spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
    }
    if (!isNullOrUndef(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === 'ticks') {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
            numSpaces = Math.round(numSpaces);
        } else {
            numSpaces = Math.ceil(numSpaces);
        }
    }
    const decimalPlaces = Math.max(_decimalPlaces(spacing), _decimalPlaces(niceMin));
    factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) {
                j++;
            }
            if (almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
                j++;
            }
        } else if (niceMin < min) {
            j++;
        }
    }
    for(; j < numSpaces; ++j){
        ticks.push({
            value: Math.round((niceMin + j * spacing) * factor) / factor
        });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
            ticks[ticks.length - 1].value = max;
        } else {
            ticks.push({
                value: max
            });
        }
    } else if (!maxDefined || niceMax === max) {
        ticks.push({
            value: niceMax
        });
    }
    return ticks;
}
function relativeLabelSize(value, minSpacing, { horizontal , minRotation  }) {
    const rad = toRadians(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ('' + value).length;
    return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
    constructor(cfg){
        super(cfg);
         this.start = undefined;
         this.end = undefined;
         this._startValue = undefined;
         this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if (isNullOrUndef(raw)) {
            return null;
        }
        if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
            return null;
        }
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero  } = this.options;
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = sign(min);
            const maxSign = sign(max);
            if (minSign < 0 && maxSign < 0) {
                setMax(0);
            } else if (minSign > 0 && maxSign > 0) {
                setMin(0);
            }
        }
        if (min === max) {
            let offset = max === 0 ? 1 : Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) {
                setMin(min - offset);
            }
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit , stepSize  } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) {
            maxTicks = Math.min(maxTicksLimit, maxTicks);
        }
        return maxTicks;
    }
 computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === 'ticks') {
            _setMinAndMaxByKey(ticks, this, 'value');
        }
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
 configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
}

class LinearScale extends LinearScaleBase {
    static id = 'linear';
 static defaults = {
        ticks: {
            callback: Ticks.formatters.numeric
        }
    };
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = isNumberFinite(min) ? min : 0;
        this.max = isNumberFinite(max) ? max : 1;
        this.handleTickRangeOptions();
    }
 computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = toRadians(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}

const log10Floor = (v)=>Math.floor(log10(v));
const changeExponent = (v, m)=>Math.pow(10, log10Floor(v) + m);
function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
}
function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
}
function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while(steps(min, max, rangeExp) > 10){
        rangeExp++;
    }
    while(steps(min, max, rangeExp) < 10){
        rangeExp--;
    }
    return Math.min(rangeExp, log10Floor(min));
}
 function generateTicks(generationOptions, { min , max  }) {
    min = finiteOrDefault(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = finiteOrDefault(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while(value < max){
        ticks.push({
            value,
            major: isMajor(value),
            significand
        });
        if (significand >= 10) {
            significand = significand < 15 ? 15 : 20;
        } else {
            significand++;
        }
        if (significand >= 20) {
            exp++;
            significand = 2;
            precision = exp >= 0 ? 1 : precision;
        }
        value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = finiteOrDefault(generationOptions.max, value);
    ticks.push({
        value: lastTick,
        major: isMajor(lastTick),
        significand
    });
    return ticks;
}
class LogarithmicScale extends Scale {
    static id = 'logarithmic';
 static defaults = {
        ticks: {
            callback: Ticks.formatters.logarithmic,
            major: {
                enabled: true
            }
        }
    };
    constructor(cfg){
        super(cfg);
         this.start = undefined;
         this.end = undefined;
         this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return isNumberFinite(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = isNumberFinite(min) ? Math.max(0, min) : null;
        this.max = isNumberFinite(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) {
            this._zero = true;
        }
        if (this._zero && this.min !== this._suggestedMin && !isNumberFinite(this._userMin)) {
            this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
        }
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin(changeExponent(min, -1));
                setMax(changeExponent(max, +1));
            }
        }
        if (min <= 0) {
            setMin(changeExponent(max, -1));
        }
        if (max <= 0) {
            setMax(changeExponent(min, +1));
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = generateTicks(generationOptions, this);
        if (opts.bounds === 'ticks') {
            _setMinAndMaxByKey(ticks, this, 'value');
        }
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
 getLabelForValue(value) {
        return value === undefined ? '0' : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
 configure() {
        const start = this.min;
        super.configure();
        this._startValue = log10(start);
        this._valueRange = log10(this.max) - log10(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) {
            value = this.min;
        }
        if (value === null || isNaN(value)) {
            return NaN;
        }
        return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}

function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = toPadding(tickOpts.backdropPadding);
        return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
    }
    return 0;
}
function measureLabelSize(ctx, font, label) {
    label = isArray(label) ? label : [
        label
    ];
    return {
        w: _longestText(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
        return {
            start: pos - size / 2,
            end: pos + size / 2
        };
    } else if (angle < min || angle > max) {
        return {
            start: pos - size,
            end: pos
        };
    }
    return {
        start: pos,
        end: pos + size
    };
}
 function fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? PI / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = toFont(opts.font);
        const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = _normalizeAngle(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round(toDegrees(angleRadians));
        const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const extra = getTickBackdropHeight(opts) / 2;
    const outerDistance = scale.drawingArea;
    const additionalAngle = opts.pointLabels.centerPointLabels ? PI / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
        const angle = Math.round(toDegrees(_normalizeAngle(pointLabelPosition.angle + HALF_PI)));
        const size = labelSizes[i];
        const y = yForAngle(pointLabelPosition.y, size.h, angle);
        const textAlign = getTextAlignForAngle(angle);
        const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
        items.push({
            x: pointLabelPosition.x,
            y,
            textAlign,
            left,
            top: y,
            right: left + size.w,
            bottom: y + size.h
        });
    }
    return items;
}
function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
        return 'center';
    } else if (angle < 180) {
        return 'left';
    }
    return 'right';
}
function leftForTextAlign(x, w, align) {
    if (align === 'right') {
        x -= w;
    } else if (align === 'center') {
        x -= w / 2;
    }
    return x;
}
function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) {
        y -= h / 2;
    } else if (angle > 270 || angle < 90) {
        y -= h;
    }
    return y;
}
function drawPointLabels(scale, labelCount) {
    const { ctx , options: { pointLabels  }  } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        const plFont = toFont(optsAtIndex.font);
        const { x , y , textAlign , left , top , right , bottom  } = scale._pointLabelItems[i];
        const { backdropColor  } = optsAtIndex;
        if (!isNullOrUndef(backdropColor)) {
            const borderRadius = toTRBLCorners(optsAtIndex.borderRadius);
            const padding = toPadding(optsAtIndex.backdropPadding);
            ctx.fillStyle = backdropColor;
            const backdropLeft = left - padding.left;
            const backdropTop = top - padding.top;
            const backdropWidth = right - left + padding.width;
            const backdropHeight = bottom - top + padding.height;
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                addRoundedRectPath(ctx, {
                    x: backdropLeft,
                    y: backdropTop,
                    w: backdropWidth,
                    h: backdropHeight,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
            }
        }
        renderText(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: 'middle'
        });
    }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx  } = scale;
    if (circular) {
        ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
    } else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color , lineWidth  } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
        return;
    }
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function createPointLabelContext(parent, index, label) {
    return createContext(parent, {
        label,
        index,
        type: 'pointLabel'
    });
}
class RadialLinearScale extends LinearScaleBase {
    static id = 'radialLinear';
 static defaults = {
        display: true,
        animate: true,
        position: 'chartArea',
        angleLines: {
            display: true,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0
        },
        grid: {
            circular: false
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: true,
            callback: Ticks.formatters.numeric
        },
        pointLabels: {
            backdropColor: undefined,
            backdropPadding: 2,
            display: true,
            font: {
                size: 10
            },
            callback (label) {
                return label;
            },
            padding: 5,
            centerPointLabels: false
        }
    };
    static defaultRoutes = {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    };
    static descriptors = {
        angleLines: {
            _fallback: 'grid'
        }
    };
    constructor(cfg){
        super(cfg);
         this.xCenter = undefined;
         this.yCenter = undefined;
         this.drawingArea = undefined;
         this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(false);
        this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
        this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
 computeTickLimit() {
        return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = callback(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : '';
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) {
            fitWithPointLabels(this);
        } else {
            this.setCenterPoint(0, 0, 0, 0);
        }
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = TAU / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return _normalizeAngle(index * angleMultiplier + toRadians(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if (isNullOrUndef(value)) {
            return NaN;
        }
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) {
            return (this.max - value) * scalingFactor;
        }
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if (isNullOrUndef(distance)) {
            return NaN;
        }
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - HALF_PI + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left , top , right , bottom  } = this._pointLabelItems[index];
        return {
            left,
            top,
            right,
            bottom
        };
    }
 drawBackground() {
        const { backgroundColor , grid: { circular  }  } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
 drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines , grid , border  } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) {
            drawPointLabels(this, labelCount);
        }
        if (grid.display) {
            this.ticks.forEach((tick, index)=>{
                if (index !== 0) {
                    offset = this.getDistanceFromCenterForValue(tick.value);
                    const context = this.getContext(index);
                    const optsAtIndex = grid.setContext(context);
                    const optsAtIndexBorder = border.setContext(context);
                    drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
                }
            });
        }
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color , lineWidth  } = optsAtIndex;
                if (!lineWidth || !color) {
                    continue;
                }
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
 drawBorder() {}
 drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) {
            return;
        }
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && !opts.reverse) {
                return;
            }
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = toFont(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = toPadding(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            renderText(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color
            });
        });
        ctx.restore();
    }
 drawTitle() {}
}

const INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
 const UNITS =  /* #__PURE__ */ Object.keys(INTERVALS);
 function sorter(a, b) {
    return a - b;
}
 function parse(scale, input) {
    if (isNullOrUndef(input)) {
        return null;
    }
    const adapter = scale._adapter;
    const { parser , round , isoWeekday  } = scale._parseOpts;
    let value = input;
    if (typeof parser === 'function') {
        value = parser(value);
    }
    if (!isNumberFinite(value)) {
        value = typeof parser === 'string' ? adapter.parse(value,  parser) : adapter.parse(value);
    }
    if (value === null) {
        return null;
    }
    if (round) {
        value = round === 'week' && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
    }
    return +value;
}
 function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for(let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = INTERVALS[UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
            return UNITS[i];
        }
    }
    return UNITS[ilen - 1];
}
 function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--){
        const unit = UNITS[i];
        if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
            return unit;
        }
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
 function determineMajorUnit(unit) {
    for(let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i){
        if (INTERVALS[UNITS[i]].common) {
            return UNITS[i];
        }
    }
}
 function addTick(ticks, time, timestamps) {
    if (!timestamps) {
        ticks[time] = true;
    } else if (timestamps.length) {
        const { lo , hi  } = _lookup(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
 function setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) {
            ticks[index].major = true;
        }
    }
    return ticks;
}
 function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
     const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
    static id = 'time';
 static defaults = {
 bounds: 'data',
        adapters: {},
        time: {
            parser: false,
            unit: false,
            round: false,
            isoWeekday: false,
            minUnit: 'millisecond',
            displayFormats: {}
        },
        ticks: {
 source: 'auto',
            callback: false,
            major: {
                enabled: false
            }
        }
    };
 constructor(props){
        super(props);
         this._cache = {
            data: [],
            labels: [],
            all: []
        };
         this._unit = 'day';
         this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts = {}) {
        const time = scaleOpts.time || (scaleOpts.time = {});
         const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
        adapter.init(opts);
        mergeIf(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
 parse(raw, index) {
        if (raw === undefined) {
            return null;
        }
        return parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || 'day';
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
 function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) {
                min = Math.min(min, bounds.min);
            }
            if (!maxDefined && !isNaN(bounds.max)) {
                max = Math.max(max, bounds.max);
            }
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
                _applyBounds(this.getMinMax(false));
            }
        }
        min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
 _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min,
            max
        };
    }
 buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === 'ticks' && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = _filterBetween(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) {
            ticks.reverse();
        }
        return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) {
            this.initOffsets(this.ticks.map((tick)=>+tick.value));
        }
    }
 initOffsets(timestamps = []) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) {
                start = 1 - first;
            } else {
                start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            }
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) {
                end = last;
            } else {
                end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
            }
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = _limitValue(start, 0, limit);
        end = _limitValue(end, 0, limit);
        this._offsets = {
            start,
            end,
            factor: 1 / (start + 1 + end)
        };
    }
 _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = valueOrDefault(options.ticks.stepSize, 1);
        const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        const hasWeekday = isNumber(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) {
            first = +adapter.startOf(first, 'isoWeek', weekday);
        }
        first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) {
            throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
        }
        const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++){
            addTick(ticks, time, timestamps);
        }
        if (time === max || options.bounds === 'ticks' || count === 1) {
            addTick(ticks, time, timestamps);
        }
        return Object.keys(ticks).sort((a, b)=>a - b).map((x)=>+x);
    }
 getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) {
            return adapter.format(value, timeOpts.tooltipFormat);
        }
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
 format(value, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const fmt = format || formats[unit];
        return this._adapter.format(value, fmt);
    }
 _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formatter = options.ticks.callback;
        if (formatter) {
            return callback(formatter, [
                time,
                index,
                ticks
            ], this);
        }
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
 generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
 getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
 getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
 getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
 _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
 _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
 getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) {
            return timestamps;
        }
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) {
            return this._cache.data = metas[0].controller.getAllParsedValues(this);
        }
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        }
        return this._cache.data = this.normalize(timestamps);
    }
 getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) {
            return timestamps;
        }
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i){
            timestamps.push(parse(this, labels[i]));
        }
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
 normalize(values) {
        return _arrayUnique(values.sort(sorter));
    }
}

function interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) {
            ({ lo , hi  } = _lookupByKey(table, 'pos', val));
        }
        ({ pos: prevSource , time: prevTarget  } = table[lo]);
        ({ pos: nextSource , time: nextTarget  } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) {
            ({ lo , hi  } = _lookupByKey(table, 'time', val));
        }
        ({ time: prevSource , pos: prevTarget  } = table[lo]);
        ({ time: nextSource , pos: nextTarget  } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
    static id = 'timeseries';
 static defaults = TimeScale.defaults;
 constructor(props){
        super(props);
         this._table = [];
         this._minPos = undefined;
         this._tableRange = undefined;
    }
 initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = interpolate(table, this.min);
        this._tableRange = interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
 buildLookupTable(timestamps) {
        const { min , max  } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) {
                items.push(curr);
            }
        }
        if (items.length < 2) {
            return [
                {
                    time: min,
                    pos: 0
                },
                {
                    time: max,
                    pos: 1
                }
            ];
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) {
                table.push({
                    time: curr,
                    pos: i / (ilen - 1)
                });
            }
        }
        return table;
    }
 _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) {
            return timestamps;
        }
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) {
            timestamps = this.normalize(data.concat(label));
        } else {
            timestamps = data.length ? data : label;
        }
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
 getDecimalForValue(value) {
        return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
 getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}

var scales = /*#__PURE__*/Object.freeze({
__proto__: null,
CategoryScale: CategoryScale,
LinearScale: LinearScale,
LogarithmicScale: LogarithmicScale,
RadialLinearScale: RadialLinearScale,
TimeScale: TimeScale,
TimeSeriesScale: TimeSeriesScale
});

const registerables = [
    controllers,
    elements,
    plugins,
    scales
];

export { Animation, Animations, ArcElement, BarController, BarElement, BasePlatform, BasicPlatform, BubbleController, CategoryScale, Chart, plugin_colors as Colors, DatasetController, plugin_decimation as Decimation, DomPlatform, DoughnutController, Element, index as Filler, Interaction, plugin_legend as Legend, LineController, LineElement, LinearScale, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, Scale, ScatterController, plugin_subtitle as SubTitle, TimeScale, TimeSeriesScale, plugin_title as Title, plugin_tooltip as Tooltip, adapters as _adapters, _detectPlatform, animator, controllers, elements, layouts, plugins, registerables, registry, scales };
//# sourceMappingURL=chart.js.map
