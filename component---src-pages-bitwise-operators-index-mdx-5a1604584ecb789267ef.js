(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Bl7J:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz");function b(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"center-text"},"Andrew Burke © 2020"),r.a.createElement("div",{className:"center-div"},r.a.createElement("a",{className:"logo github",href:"https://github.com/nomnomab",target:"_blank"}),r.a.createElement("a",{className:"logo gist",href:"https://gist.github.com/nomnomab",target:"_blank"})))}var l=a("qhky");function o(e){var t=e.children;Object(i.useStaticQuery)("3159585216");return r.a.createElement("div",null,r.a.createElement("div",{className:"application"},r.a.createElement(l.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:"Nomnom's Blog"}),r.a.createElement("meta",{property:"og:description",content:"A collection of useful information and tutorials. The content typically ranges between mathematics, to general information about game engines."}),r.a.createElement("meta",{property:"og:url",content:"https://nomnomab.github.io/blog/"}))),r.a.createElement("header",{className:"header"},r.a.createElement("a",{className:"site-icon",href:"/blog"})),r.a.createElement("div",{className:"content"},t," ",r.a.createElement(b,null)))}},R45Z:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));a("q1tI");var n=a("7ljp"),r=a("Bl7J"),i=a("hCLT"),b=a("0b/w"),l=a("1UO4"),o={},s={_frontmatter:o},c=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b.a,{title:a.pageContext.frontmatter.title,date:a.pageContext.frontmatter.date,inProgress:!0,mdxType:"Titlebar"},Object(n.b)(l.a,{href:"#general-information",title:"General Information",mdxType:"BlogTableOfContentsItem"}),Object(n.b)(l.a,{href:"#bit-operations",title:"Bit Operations",mdxType:"BlogTableOfContentsItem"})),Object(n.b)("h3",{id:"general-information"},"General Information"),Object(n.b)("p",null,'So, you want to delve into the realm of bits? Well, let\'s get into it. Now, you may be asking: "What exactly is a bit?".'),Object(n.b)("blockquote",null,'A bit (short for "binary digit") is the smallest unit of measurement used to quantify computer data. It contains a single binary value of 0 or 1. (',Object(n.b)("a",{href:"https://techterms.com/definition/bit",target:"_blank"},"TechTerms"),")"),Object(n.b)("p",null,"Ok, great, but why is this so useful? Well, everything on your computer is basically a collection of bits. Yes, everything. Every number, name, image, and color is made up of bits."),Object(n.b)("p",null,"Just take a look at some of the basic data types of C#:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Range"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"right"}),"Size in bits"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"byte"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"0 to 255"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"8 bits")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"short"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"-32,768 to 32,767"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"16 bits")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"int"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"-2,147,483,648 to 2,147,483,647"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"32 bits")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"long"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"64 bits")))),Object(n.b)("p",null,"Let's look at some example values and their bit equivalences:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Value"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"right"}),"Bit representation"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"byte"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"16"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"0001 0000")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"short"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"2,048"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"0000 1000 0000 0000")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"int"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"150,256,218"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"1000 1111 0100 1011 1010 0101 1010")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"long"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"200,681,912,321"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"0010 1110 1011 1001 1001 0010 1111 1000 0000 0001")))),Object(n.b)("p",null,"The way you can determine what bit value represents a number is through a method I call bit sliding. Let's look at what I mean:"),Object(n.b)("div",{className:"bit-example"},Object(n.b)("div",null,Object(n.b)(i.a,{className:"text-loop",interval:1500,springConfig:{stiffness:340,damping:50},children:["0","1","2","3","4","5","6","7","8","9","10","11","12"],mdxType:"TextLoop"})," "),Object(n.b)("span",null,"equates to "),Object(n.b)("div",null,Object(n.b)(i.a,{className:"text-loop",interval:1500,springConfig:{stiffness:340,damping:50},children:["0000","0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100"],mdxType:"TextLoop"}))),Object(n.b)("p",null,"Basically, a bit will come in from the right, each iteration afterwards will fill the remaining bits, then the bit will slide to the left, and then this process repeats for the next numbers in sequence."),Object(n.b)("p",null,"Now, let's play around with them considering you have a general idea of what a bit is."),Object(n.b)("h3",{id:"bit-operations"},"Bit Operations"),Object(n.b)("p",null,"When dealing with bits you have various operators. These operators manipulate bits by moving them around, or flipping their values. Let's see what they look like."),Object(n.b)("h4",null,"OR"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"OR")," operator is a simple one to understand. All it does is that it copies bits that exist in either operand."),Object(n.b)("p",null,"Let's look at an example: ",Object(n.b)("inlineCode",{parentName:"p"},"0001 | 1000 = 1001")," (",Object(n.b)("inlineCode",{parentName:"p"},"1 | 8 = 9"),"). As you can see, the bits from both operands get copied into the output."),Object(n.b)("h4",null,"AND"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"AND")," operator is another simple one. The way it works is that if a bit is shared between the operands, then it gets copied."),Object(n.b)("p",null,"For example: ",Object(n.b)("inlineCode",{parentName:"p"},"0101 | 0110 = 0100")," (",Object(n.b)("inlineCode",{parentName:"p"},"5 & 6 = 4"),")."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-bitwise-operators-index-mdx-5a1604584ecb789267ef.js.map