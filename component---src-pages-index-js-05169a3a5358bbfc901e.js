(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("W/9C");function c(e){var t=e.children;Object(o.useStaticQuery)("3159585216");return a.a.createElement("div",null,a.a.createElement("header",{className:"header"},a.a.createElement("a",{className:"site-icon",href:"/blog"})),a.a.createElement("div",{className:"content"},t," ",a.a.createElement(i.a,null)))}},CB93:function(e,t){e.exports="data:image/png;base64,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"},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("q1tI"),a=n.n(r);n("Wbzz");function o(e){return a.a.createElement("div",{style:{paddingTop:e.paddingTop}},a.a.createElement("h2",{className:"center-text"},e.title),a.a.createElement("div",{className:"blog-previews",style:{paddingBottom:e.paddingBottom}},e.children))}function i(e){return a.a.createElement("a",{className:"blog-post-preview clickable",href:e.page},a.a.createElement("span",{className:"warning",style:{visibility:e.inProgress?"visible":"hidden"},"data-text":"This post is under construction"}),a.a.createElement("img",{src:e.img}),a.a.createElement("div",{className:"blog-post-preview-title"},e.title))}var c=n("Bl7J"),u=n("qhky"),s=n("CB93"),l=n.n(s);function f(){return a.a.createElement(c.a,null,a.a.createElement("div",{className:"application"},a.a.createElement(u.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:title",content:"Nomnom's Blog"}),a.a.createElement("meta",{property:"og:description",content:"A collection of useful information and tutorials. The content typically ranges between mathematics, to general information about game engines."}),a.a.createElement("meta",{property:"og:url",content:"https://nomnomab.github.io/blog/"}),a.a.createElement("meta",{property:"og:image",content:"https://github.com/nomnomab/blog/blob/gh-pages/icons/icon-256x256.png"}))),a.a.createElement(o,{title:"Mathematics",paddingTop:"1px",paddingBottom:"2rem"},a.a.createElement(i,{title:"Bitwise Operators",page:"bitwise-operators",img:l.a,inProgress:!0})))}},"W/9C":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r);function o(){return a.a.createElement("div",{className:"footer"},a.a.createElement("p",{className:"center-text"},"Andrew Burke © 2020"),a.a.createElement("div",{className:"center-div"},a.a.createElement("a",{className:"logo github",href:"https://github.com/nomnomab",target:"_blank"}),a.a.createElement("a",{className:"logo gist",href:"https://gist.github.com/nomnomab",target:"_blank"})))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],i[s[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,o,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("YVoz"),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(e){return T[e]})),"charset"),A="cssText",w="href",S="http-equiv",O="innerHTML",C="itemprop",j="name",I="property",N="rel",x="src",k="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",L="defer",M="encodeSpecialCharacters",Y="onChangeClientState",D="titleTemplate",G=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=_(e,T.TITLE),n=_(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,R);return t||r||void 0},Q=function(e){return _(e,Y)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},F=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+J(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===N&&"canonical"===e[n].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==O&&c!==A&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,a),ce(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+H(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+H(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===O||n===A){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===A)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+H(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(g,a,r),link:pe(T.LINK,o,r),meta:pe(T.META,i,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,s,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:X([w,k],e),bodyAttributes:V(b,e),defer:_(e,L),encode:_(e,M),htmlAttributes:V(g,e),linkTags:F(T.LINK,[N,w],e),metaTags:F(T.META,[j,E,S,I,C],e),noscriptTags:F(T.NOSCRIPT,[O],e),onChangeClientState:Q(e),scriptTags:F(T.SCRIPT,[x,O],e),styleTags:F(T.STYLE,[A],e),title:W(e),titleAttributes:V(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return Z(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},o),t));case T.BODY:return z({},a,{bodyAttributes:z({},o)});case T.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[G[n]||n]=e[n],t}),t)}(q(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},K(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-05169a3a5358bbfc901e.js.map