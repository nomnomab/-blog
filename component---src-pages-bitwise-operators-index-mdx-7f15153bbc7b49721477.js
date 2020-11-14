(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{R45Z:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return s})),a.d(e,"default",(function(){return j}));var n=a("q1tI"),b=a.n(n),r=a("7ljp"),i=a("Wbzz"),l=a("0b/w");var c=a("hCLT"),s={},o={_frontmatter:s},O=function(t){var e=t.children,a=Object(i.c)("3159585216");return b.a.createElement("div",null,b.a.createElement("header",null,b.a.createElement(i.a,{to:"/",className:"link"},b.a.createElement("h3",null,a.site.siteMetadata.title))),b.a.createElement("div",{className:"content"},e))};function j(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,["components"]);return Object(r.b)(O,Object.assign({},o,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)(l.a,{title:a.pageContext.frontmatter.title,date:a.pageContext.frontmatter.date,mdxType:"Titlebar"}),Object(r.b)("p",null,'So, you want to delve into the realm of bits? Well, let\'s get into it. Now, you may be asking: "What exactly is a bit?".'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A bit is a single value that indicates 1 or 0, or rather, on or off.")),Object(r.b)("p",null,"Ok, great, but why is this so useful? Well, everything on your computer is basically a collection of bits. Yes, everything. Every number, name, image, and color is made up of bits."),Object(r.b)("p",null,"Just take a look at some of the basic data types of C#:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Range"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"right"}),"Size in bits"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"byte"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"0 to 255"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"8 bits")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"short"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"-32,768 to 32,767"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"16 bits")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"int"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"-2,147,483,648 to 2,147,483,647"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"32 bits")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"long"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"64 bits")))),Object(r.b)("p",null,"Let's look at some example values and their bit equivalences:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Value"),Object(r.b)("th",Object.assign({parentName:"tr"},{align:"right"}),"Bit representation"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"byte"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"16"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"0001 0000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"short"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"2,048"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"0000 1000 0000 0000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"int"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"150,256,218"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"1000 1111 0100 1011 1010 0101 1010")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"long"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"200,681,912,321"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:"right"}),"0010 1110 1011 1001 1001 0010 1111 1000 0000 0001")))),Object(r.b)("p",null,"The way you can determine what bit value represents a number is through a method I call bit sliding. Let's look at what I mean:"),Object(r.b)("div",{className:"bit-example"},Object(r.b)(c.a,{interval:1500,children:["0","1","2","3","4","5","6","7","8","9","10","11","12"],mdxType:"TextLoop"})," ",Object(r.b)("span",null,"equates to "),Object(r.b)(c.a,{interval:1500,children:["0000","0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100"],mdxType:"TextLoop"})),Object(r.b)("p",null,"Basically, a bit will come in from the right, each iteration afterwards will fill the remaining bits, then the bit will slide to the left, and then this process repeats for the next numbers in sequence."),Object(r.b)("p",null,"Now, let's play around with them considering you have a general idea of what a bit is."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-bitwise-operators-index-mdx-7f15153bbc7b49721477.js.map